export enum FLEXBOX_GAP_ENUM {
  NONE = "none",
  XS = "xs",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XL = "xl",
}

export type FLEXBOX_GAP_TYPE = `${FLEXBOX_GAP_ENUM}`;

export const FLEXBOX_GAP_DATA = {
  [FLEXBOX_GAP_ENUM.NONE]: "0px",
  [FLEXBOX_GAP_ENUM.XS]: "4px",
  [FLEXBOX_GAP_ENUM.SMALL]: "8px",
  [FLEXBOX_GAP_ENUM.MEDIUM]: "16px",
  [FLEXBOX_GAP_ENUM.LARGE]: "24px",
  [FLEXBOX_GAP_ENUM.XL]: "32px",
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
