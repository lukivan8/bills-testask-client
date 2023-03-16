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

export enum STATUS_COLOR_ENUM {
  SUCCESS = "success",
  ERROR = "error",
}

export type STATUS_COLOR_TYPE = `${STATUS_COLOR_ENUM}`;

export const STATUS_COLOR_DATA = {
  [STATUS_COLOR_ENUM.SUCCESS]: "#0da11c",
  [STATUS_COLOR_ENUM.ERROR]:"#c9000a"
};