/* eslint-disable no-color-literals */

import type { MetabaseColorsV2, MetabaseThemeColors } from "./types";

/**
 * Generates a complete MetabaseColorsV2 palette from main colors.
 * This function takes the three main colors (brand, background-primary, text-primary)
 * and generates all supporting colors based on them.
 *
 * @param mainColors - Object containing at minimum brand, background-primary, and text-primary
 * @returns Complete MetabaseColorsV2 palette with all color keys populated
 */
export function generateColorPalette(
  mainColors: MetabaseThemeColors = {},
): MetabaseColorsV2 {
  const {
    brand = "#509EE3", // Default Metabase blue
    "background-primary": backgroundPrimary = "#ffffff",
    "text-primary": textPrimary = "rgba(45, 51, 63, 0.8)",
  } = mainColors;

  // For now, use placeholder logic for color generation
  // TODO: Implement proper color manipulation logic using color-mix or a color library
  return {
    // Main colors
    brand,
    "background-primary": backgroundPrimary,
    "text-primary": textPrimary,

    // Supporting colors - to be implemented with proper color generation
    "text-secondary": mainColors["text-secondary"] ?? "rgba(45, 51, 63, 0.6)", // Placeholder
    "text-tertiary": mainColors["text-tertiary"] ?? "rgba(45, 51, 63, 0.4)", // Placeholder
    "text-primary-inverse":
      mainColors["text-primary-inverse"] ?? "rgba(255, 255, 255, 0.8)", // Placeholder
    "background-secondary":
      mainColors["background-secondary"] ?? "rgba(240, 240, 248, 1)", // Placeholder
    shadow: mainColors.shadow ?? "rgba(45, 51, 63, 0.2)", // Placeholder
    border: mainColors.border ?? "rgba(216, 216, 228, 1)", // Placeholder
    filter: mainColors.filter ?? "#7172AD", // Placeholder - purple
    summarize: mainColors.summarize ?? "#88BF4D", // Placeholder - green
    positive: mainColors.positive ?? "#88BF4D", // Placeholder - green
    negative: mainColors.negative ?? "#EF8C8C", // Placeholder - red
  };
}

/**
 * Default chart colors for Metabase.
 */
export const DEFAULT_CHART_COLORS = [
  "#509EE3", // blue
  "#88BF4D", // green
  "#A989C5", // purple
  "#EF8C8C", // red
  "#F9D45C", // yellow
  "#F2A86F", // orange
  "#98D9D9", // teal
  "#7172AD", // indigo
] as const;
