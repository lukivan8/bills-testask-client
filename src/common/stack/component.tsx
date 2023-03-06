import { ReactNode } from "react";
import styled, { css } from "styled-components";
import {
  FLEXBOX_GAP_DATA,
  FLEXBOX_GAP_ENUM,
  FLEXBOX_GAP_TYPE,
} from "../../theme/sizes";

const Component: React.FC<{
  children?: ReactNode;
  gap?: FLEXBOX_GAP_TYPE;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}> = ({
  children,
  gap = FLEXBOX_GAP_ENUM.NONE,
  justifyContent = "center",
  alignItems = "center",
  width = "100%",
}) => {
  return (
    <Stack
      gap={gap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
    >
      {children}
    </Stack>
  );
};

const Stack = styled.div<{
  width: string;
  gap: FLEXBOX_GAP_TYPE;
  justifyContent: string;
  alignItems: string;
}>`
  ${({ width, justifyContent, alignItems, gap }) => {
    return css`
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      max-width: ${width};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      gap: ${FLEXBOX_GAP_DATA[gap]};
    `;
  }}
`;

export default Component;