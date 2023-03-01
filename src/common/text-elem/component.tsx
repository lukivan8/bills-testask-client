import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {STYLING_PROPS} from "./const";
import {
  FONT_SIZE_DATA, FONT_SIZE_ENUM,
  FONT_SIZE_TYPE,
  FONT_WEIGHT_DATA, FONT_WEIGHT_ENUM,
  FONT_WEIGHT_TYPE, TEXT_COLOR_DATA,
  TEXT_COLOR_ENUM,
  TEXT_COLOR_TYPE
} from "../../theme/text-style";


const Component: React.FC<{
  size?: FONT_SIZE_TYPE;
  color?: TEXT_COLOR_TYPE,
  tid?: string,
  weight?: FONT_WEIGHT_TYPE;
  children?: React.ReactNode
}> = ({size=FONT_SIZE_ENUM.DEFAULT, color = TEXT_COLOR_ENUM.PRIMARY, tid, weight=FONT_WEIGHT_ENUM.NORMAL, children}) => {
  const {t} = useTranslation()
  return (
    <TextStyled weight={weight} color={color}
                size={size}>{tid ? t(tid) : children}</TextStyled>
  );
};

const TextStyled = styled.p`
  color: ${({color}: STYLING_PROPS) => TEXT_COLOR_DATA[color]};
  font-family: Manrope, sans-serif;
  font-size: ${({size}: STYLING_PROPS) => FONT_SIZE_DATA[size]};
  margin: 0;
  font-weight: ${({weight}: STYLING_PROPS) => FONT_WEIGHT_DATA[weight]};
`;

export default Component;