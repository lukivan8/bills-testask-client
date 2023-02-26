import React, {ReactNode} from 'react';
import styled from "styled-components";
import {StylingProps} from "./const";

const Component: React.FC<{
  children?: ReactNode,
  gap?: number
}> = ({children, gap=16}) => {
  return (
    <Wrapper gap={gap}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  max-width: 90%;
  margin: 12px auto;
  gap: ${({gap}:StylingProps) => gap + "px"};
`

export default Component;