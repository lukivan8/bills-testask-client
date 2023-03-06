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
