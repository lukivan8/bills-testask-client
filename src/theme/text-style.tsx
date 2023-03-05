export enum TEXT_COLOR_ENUM {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BUTTON_OUTLINE = "button-outline",
  BUTTON_SOLID = "button-solid",
}

export type TEXT_COLOR_TYPE = `${TEXT_COLOR_ENUM}`;

export const TEXT_COLOR_DATA = {
  [TEXT_COLOR_ENUM.PRIMARY]: "#000000",
  [TEXT_COLOR_ENUM.SECONDARY]: "#737373",
  [TEXT_COLOR_ENUM.BUTTON_OUTLINE]: "#387ABB",
  [TEXT_COLOR_ENUM.BUTTON_SOLID]: "#FFFFFF",
};

export enum FONT_WEIGHT_ENUM {
  NORMAL = "normal",
  BOLD = "bold",
  SEMI_BOLD = "semi-bold",
  BLACK = "black",
}

export type FONT_WEIGHT_TYPE = `${FONT_WEIGHT_ENUM}`;
export const FONT_WEIGHT_DATA = {
  [FONT_WEIGHT_ENUM.NORMAL]: 500,
  [FONT_WEIGHT_ENUM.BOLD]: 700,
  [FONT_WEIGHT_ENUM.SEMI_BOLD]: 600,
  [FONT_WEIGHT_ENUM.BLACK]: 900,
};

export enum FONT_SIZE_ENUM {
  DEFAULT = "default",
  LABEL = "label",
  INPUT = "input",
  SMALL = "small",
  FOCUS = "focus",
}

export type FONT_SIZE_TYPE = `${FONT_SIZE_ENUM}`;

export const FONT_SIZE_DATA = {
  [FONT_SIZE_ENUM.DEFAULT]: "16px",
  [FONT_SIZE_ENUM.LABEL]: "18px",
  [FONT_SIZE_ENUM.INPUT]: "16px",
  [FONT_SIZE_ENUM.SMALL]: "14px",
  [FONT_SIZE_ENUM.FOCUS]: "20px",
};
