import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {StylingProps} from "./const";


const Component: React.FC<{
  size?: number;
  color?: string,
  tid?: string,
  weight?: string;
  children?: React.ReactNode
}> = ({size, color, tid, weight, children}) => {
  const {t} = useTranslation()
  return (
    <TextStyled weight={weight} color={color}
                size={size}>{tid ? t(tid) : children}</TextStyled>
  );
};

const TextStyled = styled.p`
  color: ${({color}:StylingProps) => color ? color : "black"};
  font-family: Manrope, sans-serif;
  font-size: ${({size}:StylingProps) => size ? size * 2 + "px" : "16px"};
  margin: 0;
  font-weight: ${({weight}: StylingProps) => weight ? weight : "regular"};
`;

export default Component;