import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {StylingProps} from "./const";
import {FONT_WEIGHT_TYPE, TEXT_COLOR_ENUM, TEXT_COLOR_TYPE} from "../../theme/text-style";


const Component: React.FC<{
  size?: number;
  color?: TEXT_COLOR_TYPE,
  tid?: string,
  weight?: FONT_WEIGHT_TYPE;
  children?: React.ReactNode
}> = ({size, color = TEXT_COLOR_ENUM.PRIMARY, tid, weight, children}) => {
  const {t} = useTranslation()
  return (
    <TextStyled weight={weight} color={color}
                size={size}>{tid ? t(tid) : children}</TextStyled>
  );
};

const TextStyled = styled.p`
  color: ${({color}: StylingProps) => color};
  font-family: Manrope, sans-serif;
  font-size: ${({size}: StylingProps) => size ? size * 2 + "px" : "16px"};
  margin: 0;
  font-weight: ${({weight}: StylingProps) => weight ? weight : "normal"};
`;

export default Component;