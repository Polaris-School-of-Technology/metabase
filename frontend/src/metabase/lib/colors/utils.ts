import {
  BackgroundColor,
  Color,
  type CssColor,
  Theme,
} from "@adobe/leonardo-contrast-colors";

import C from "color";

const RATIOS = [
  1.05, 1.1, 1.34, 1.94, 2.86, 3.56, 5.09, 7.86, 11.56, 15.33, 18.16, 19.44,
];

const gray = new BackgroundColor({
  name: "Gray",
  colorKeys: ["#000"],
  ratios: RATIOS,
  colorspace: "RGB",
  smooth: false,
});

export const generateSteps = (color: CssColor, name: string) => {
  const input = new Color({
    name,
    colorKeys: [color],
    ratios: RATIOS,
    colorspace: "HSL",
    smooth: false,
  });

  const theme = new Theme({
    colors: [input],
    backgroundColor: gray,
    lightness: 100,
    contrast: 1,
    saturation: 100,
    output: "HSL",
    formula: "wcag2",
  });

  const { contrastColorValues } = theme;

  const steps = {
    110: contrastColorValues[11],
    100: contrastColorValues[10],
    90: contrastColorValues[9],
    80: contrastColorValues[8],
    70: contrastColorValues[7],
    60: contrastColorValues[6],
    50: contrastColorValues[0],
    40: contrastColorValues[4],
    30: contrastColorValues[3],
    20: contrastColorValues[2],
    10: contrastColorValues[1],
    5: contrastColorValues[0],
  };

  return {
    [name]: steps,
    [`${name}Alpha`]: generateAplhaSteps(steps[100]),
    [`${name}AlphaInverse`]: generateAplhaSteps(steps[5]),
  };
};

const generateAplhaSteps = (input: CssColor) => {
  const color = C(input);

  return {
    100: color.alpha(1).toString(),
    90: color.alpha(0.93).toString(),
    80: color.alpha(0.84).toString(),
    70: color.alpha(0.74).toString(),
    60: color.alpha(0.62).toString(),
    50: color.alpha(0.51).toString(),
    40: color.alpha(0.44).toString(),
    30: color.alpha(0.29).toString(),
    20: color.alpha(0.17).toString(),
    10: color.alpha(0.05).toString(),
    5: color.alpha(0.02).toString(),
  };
};
