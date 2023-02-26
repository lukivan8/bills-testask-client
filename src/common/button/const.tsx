export enum BUTTON_FILL {
  CLEAR = "clear",
  OUTLINE = "outline",
  SOLID = "solid",
  DEFAULT = "default"
}

export const BUTTON_TEXT_COLOR = {
  [BUTTON_FILL.OUTLINE]: "#387ABB",
  [BUTTON_FILL.DEFAULT]: "#FFF",
  [BUTTON_FILL.CLEAR]: "#FFF",
  [BUTTON_FILL.SOLID]: "#FFF"
}

export enum BUTTON_TYPE {
  SUBMIT = "submit",
  BUTTON = "button"
}