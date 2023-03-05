import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  FLEXBOX_GAP_DATA,
  FLEXBOX_GAP_ENUM,
  FLEXBOX_GAP_TYPE,
} from "../../theme/sizes";

const Component: React.FC<{
  children?: ReactNode;
  gap?: FLEXBOX_GAP_TYPE;
}> = ({ children, gap = FLEXBOX_GAP_ENUM.MEDIUM }) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  max-width: 90%;
  margin: 12px auto;
  gap: ${(gap: FLEXBOX_GAP_TYPE) => FLEXBOX_GAP_DATA[gap]};
`;

export default Component;