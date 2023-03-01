import React from "react";
import {FONT_WEIGHT_TYPE, TEXT_COLOR_TYPE} from "../../theme/text-style";

export interface StylingProps {
  size?: number;
  color?: TEXT_COLOR_TYPE,
  tid?: string,
  weight?: FONT_WEIGHT_TYPE;
  children?: React.ReactNode
}
