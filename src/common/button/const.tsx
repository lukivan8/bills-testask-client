import {TEXT_COLOR_ENUM} from "../../theme/text-style";

export enum BUTTON_FILL {
  CLEAR = "clear",
  OUTLINE = "outline",
  SOLID = "solid",
  DEFAULT = "default"
}

export const BUTTON_TEXT_COLOR = {
  [BUTTON_FILL.OUTLINE]: TEXT_COLOR_ENUM.BUTTON_OUTLINE,
  [BUTTON_FILL.DEFAULT]: TEXT_COLOR_ENUM.BUTTON_SOLID,
  [BUTTON_FILL.CLEAR]: TEXT_COLOR_ENUM.BUTTON_SOLID,
  [BUTTON_FILL.SOLID]: TEXT_COLOR_ENUM.BUTTON_SOLID
}

export enum BUTTON_TYPE {
  SUBMIT = "submit",
  BUTTON = "button"
}