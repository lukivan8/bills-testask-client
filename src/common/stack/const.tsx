export enum JUSTIFY_CONTENT_ENUM {
  FLEX_START = "flexStart",
  FLEX_END = "flexEnd",
  CENTER = "center",
  SPACE_BETWEEN = "spaceBetween",
  SPACE_AROUND = "spaceAround",
  SPACE_EVENLY = "spaceEvenly",
  UNSET = "unset",
}

export const JUSTIFY_CONTENT_DATA = {
  [JUSTIFY_CONTENT_ENUM.FLEX_START]: "flex-start",
  [JUSTIFY_CONTENT_ENUM.FLEX_END]: "flex-end",
  [JUSTIFY_CONTENT_ENUM.CENTER]: "center",
  [JUSTIFY_CONTENT_ENUM.SPACE_BETWEEN]: "space-between",
  [JUSTIFY_CONTENT_ENUM.SPACE_AROUND]: "space-around",
  [JUSTIFY_CONTENT_ENUM.SPACE_EVENLY]: "space-evenly",
  [JUSTIFY_CONTENT_ENUM.UNSET]: "unset",
};

export enum ALIGN_ITEMS_ENUM {
  STRETCH = "stretch",
  FLEX_START = "flexStart",
  FLEX_END = "flexEnd",
  CENTER = "center",
  BASELINE = "baseline",
}

export const ALIGN_ITEMS_DATA = {
  [ALIGN_ITEMS_ENUM.FLEX_START]: "flex-start",
  [ALIGN_ITEMS_ENUM.FLEX_END]: "flex-end",
  [ALIGN_ITEMS_ENUM.CENTER]: "center",
  [ALIGN_ITEMS_ENUM.STRETCH]: "stretch",
  [ALIGN_ITEMS_ENUM.BASELINE]: "baseline",
};

export type JUSTIFY_CONTENT_TYPE = `${JUSTIFY_CONTENT_ENUM}`;
export type ALIGN_ITEMS_TYPE = `${ALIGN_ITEMS_ENUM}`;
