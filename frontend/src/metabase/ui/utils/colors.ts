import type { MantineTheme } from "@mantine/core";

import { colorConfig } from "metabase/lib/colors";
import { generateColorPalette } from "metabase/lib/colors/theme-generator";
import type { ColorName, MetabaseThemeV2 } from "metabase/lib/colors/types";

type ColorShades = MantineTheme["colors"]["dark"];

const allColorNames = Object.keys(colorConfig);

const ORIGINAL_COLORS = [
  "dark",
  "gray",
  "red",
  "pink",
  "grape",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "green",
  "lime",
  "yellow",
  "orange",
  "teal",
] as const;

export function getColorShades(colorName: string): ColorShades {
  // yes this is silly, but it makes typescript so happy
  return [
    colorName,
    colorName,
    colorName,
    colorName,
    colorName,
    colorName,
    colorName,
    colorName,
    colorName,
    colorName,
  ];
}

export function getThemeColors(
  theme: MetabaseThemeV2 | undefined,
): Record<string, ColorShades> {
  if (!theme) {
    // Return empty object if no theme provided
    return Object.fromEntries(
      ORIGINAL_COLORS.map((name) => [name, getColorShades("transparent")]),
    );
  }

  const generatedColors = generateColorPalette(theme.colors);

  const themeColorEntries = Object.entries(generatedColors).map(
    ([name, color]) => [name, getColorShades(color)],
  );

  // Add chart colors if provided
  const chartColorEntries =
    theme.chartColors?.map((color, index) => [
      `accent${index}`,
      getColorShades(color),
    ]) ?? [];

  return {
    ...Object.fromEntries(
      ORIGINAL_COLORS.map((name) => [name, getColorShades("transparent")]),
    ),
    ...Object.fromEntries(themeColorEntries),
    ...Object.fromEntries(chartColorEntries),
  };
}

/**
 * css color variable from Metabase's theme
 * @param colorName
 * @returns string referencing a css variable
 */
export function color(colorName: ColorName | string): string {
  if (isColorName(colorName)) {
    return `var(--mb-color-${colorName})`;
  }
  return colorName;
}

export const isColorName = (name?: string | null): name is ColorName => {
  return !!name && allColorNames.includes(name);
};
