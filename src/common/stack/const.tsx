import {FLEXBOX_GAP_TYPE} from "../../theme/container-style";

export interface STYLING_PROPS {
  gap: FLEXBOX_GAP_TYPE;
  justifyContent: JUSTIFY_CONTENT_TYPE;
  alignItems: ALIGN_ITEMS_TYPE;
  width: string;
}

export enum JUSTIFY_CONTENT_ENUM {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
  UNSET = "unset"
}

export enum ALIGN_ITEMS_ENUM {
  STRETCH = "stretch",
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  BASELINE = "baseline",
}


export type JUSTIFY_CONTENT_TYPE = `${JUSTIFY_CONTENT_ENUM}`
export type ALIGN_ITEMS_TYPE = `${ALIGN_ITEMS_ENUM}`