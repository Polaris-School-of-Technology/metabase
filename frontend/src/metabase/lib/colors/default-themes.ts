/* eslint-disable no-color-literals */

import type { MetabaseThemeV2 } from "./types";

/**
 * Default light theme for Metabase.
 * This is the standard theme used throughout the application.
 */
export const MetabaseLightTheme: MetabaseThemeV2 = {
  version: 2,
  colors: {
    brand: "hsla(208, 72%, 60%, 1.00)", // Blue 40 - brand color
    "background-primary": "hsla(0, 0%, 100%, 1.00)", // White
    "text-primary": "hsla(204, 68%, 8%, 0.84)", // Orion alpha 80

    "text-secondary": "hsla(204, 68%, 8%, 0.62)", // Orion alpha 60
    "text-tertiary": "hsla(204, 68%, 8%, 0.44)", // Orion alpha 40
    "text-primary-inverse": "hsla(0, 0%, 100%, 0.95)", // Orion alpha inverse 80
    "background-secondary": "hsla(240, 11%, 98%, 1)", // Orion 5
    shadow: "hsla(204, 68%, 8%, 0.17)", // Orion alpha 20
    border: "hsla(195, 6%, 87%, 1)", // Orion 20
    filter: "hsla(240, 46%, 58%, 1)", // Octopus 60 - purple
    summarize: "hsla(89, 48%, 40%, 1)", // Palm 50 - green
    positive: "hsla(89, 48%, 40%, 1)", // Palm 50 - success green
    negative: "hsla(358, 71%, 62%, 1)", // Lobster 50 - error red
  },
  chartColors: [
    "#509EE3", // Blue (accent0)
    "#88BF4D", // Green (accent1)
    "#A989C5", // Purple (accent2)
    "#EF8C8C", // Red (accent3)
    "#F9D45C", // Yellow (accent4)
    "#F2A86F", // Orange (accent5)
    "#98D9D9", // Teal (accent6)
    "#7172AD", // Indigo (accent7)
  ],
};

/**
 * Default dark theme for Metabase.
 * This theme is optimized for low-light environments.
 */
export const MetabaseDarkTheme: MetabaseThemeV2 = {
  version: 2,
  colors: {
    brand: "hsla(208, 72%, 60%, 1.00)", // Blue 40 - brand color (same as light)
    "background-primary": "hsla(204, 66%, 8%, 1)", // Orion 100 - dark background
    "text-primary": "hsla(0, 0%, 100%, 0.95)", // Orion alpha inverse 80 - light text

    "text-secondary": "hsla(0, 0%, 100%, 0.69)", // Orion alpha inverse 60
    "text-tertiary": "hsla(0, 0%, 100%, 0.46)", // Orion alpha inverse 40
    "text-primary-inverse": "hsla(204, 68%, 8%, 0.84)", // Orion alpha 80 - dark text for light backgrounds
    "background-secondary": "hsla(205, 63%, 5%, 1)", // Orion 110 - darker background
    shadow: "hsla(204, 68%, 8%, 0.17)", // Orion alpha 20 (same as light)
    border: "hsla(0, 0%, 100%, 0.21)", // Orion alpha inverse 20
    filter: "hsla(240, 69%, 74%, 1)", // Octopus 40 - lighter purple for dark mode
    summarize: "hsla(90, 47%, 60%, 1)", // Palm 30 - lighter green for dark mode
    positive: "hsla(90, 47%, 60%, 1)", // Palm 30 - lighter green for visibility
    negative: "hsla(358, 71%, 62%, 1)", // Lobster 50 - same as light
  },
  chartColors: [
    "#509EE3", // Blue (accent0)
    "#88BF4D", // Green (accent1)
    "#A989C5", // Purple (accent2)
    "#EF8C8C", // Red (accent3)
    "#F9D45C", // Yellow (accent4)
    "#F2A86F", // Orange (accent5)
    "#98D9D9", // Teal (accent6)
    "#7172AD", // Indigo (accent7)
  ],
};
