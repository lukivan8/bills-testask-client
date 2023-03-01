export interface STYLING_PROPS {
  gap?: number;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: ALIGN_ITEMS;
  width?: string;
}

export enum JUSTIFY_CONTENT {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
  INITIAL = "initial",
  INHERIT = "inherit",
  UNSET = "unset"
}

export enum ALIGN_ITEMS {
  STRETCH = "stretch",
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  BASELINE = "baseline",
  INITIAL = "initial",
  INHERIT = "inherit",
  UNSET = "unset"
}
