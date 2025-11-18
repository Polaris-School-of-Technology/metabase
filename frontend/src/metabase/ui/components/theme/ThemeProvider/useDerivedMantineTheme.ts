import type { MantineTheme, MantineThemeOverride } from "@mantine/core";
import { merge } from "icepick";
import { useEffect, useMemo, useState } from "react";

import { mutateColors } from "metabase/lib/colors/colors";
import {
  DEFAULT_CHART_COLORS,
  generateColorPalette,
} from "metabase/lib/colors/theme-generator";
import type { ColorPalette, MetabaseThemeV2 } from "metabase/lib/colors/types";

import { getThemeOverrides } from "../../../theme";
import type { ResolvedColorScheme } from "../ColorSchemeProvider/ColorSchemeProvider";

interface UseDerivedThemeOverrideOptions {
  /** Are we in light or dark mode? */
  resolvedColorScheme: ResolvedColorScheme;

  /** Theme objects for theming both main app and embedding. */
  theme?: MetabaseThemeV2;

  /** Currently used for Embedding SDK's legacy theme. */
  themeOverride?: MantineThemeOverride;
}

/**
 * Derives a MantineThemeOverride from MetabaseThemeV2 or legacy themeOverride.
 *
 * This hook processes MetabaseThemeV2 (if provided) by:
 * 1. Generating a complete color palette
 * 2. Mutating the global colors object
 * 3. Creating Mantine theme overrides
 *
 * If both theme and themeOverride are provided, theme takes precedence.
 * If neither is provided, falls back to colorScheme-based theme.
 */
export function useDerivedMantineTheme(
  options: UseDerivedThemeOverrideOptions,
): MantineTheme {
  const { theme } = options;
  const [themeCacheBuster, setThemeCacheBuster] = useState(1);

  const colorPalette = useMemo(() => {
    if (!theme) {
      return null;
    }

    const palette: ColorPalette = { ...generateColorPalette(theme.colors) };

    // Populate accent0 - accent7 with chart colors.
    (theme.chartColors ?? DEFAULT_CHART_COLORS).forEach((color, index) => {
      palette[`accent${index}` as keyof ColorPalette] = color;
    });

    return palette;
  }, [theme]);

  useEffect(() => {
    if (colorPalette) {
      mutateColors(colorPalette);
    }
  }, [colorPalette]);

  return useMemo(() => {
    const derivedTheme = getThemeOverrides({
      theme,
      colorScheme: options.resolvedColorScheme,
    });

    // Embedding SDK's legacy theme system generates its own `themeOverride`.
    const mergedTheme = merge(
      derivedTheme,
      options.themeOverride,
    ) as MantineTheme;

    return {
      ...mergedTheme,
      other: {
        ...mergedTheme.other,
        colorScheme: options.resolvedColorScheme,
        updateColorSettings: (newValue: ColorPalette) => {
          mutateColors(newValue);
          setThemeCacheBuster(themeCacheBuster + 1);
        },
      },
    };
  }, [
    theme,
    options.themeOverride,
    options.resolvedColorScheme,
    themeCacheBuster,
  ]);
}
