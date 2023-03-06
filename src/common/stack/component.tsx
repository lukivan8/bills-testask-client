import { ReactNode } from "react";

import {
  ALIGN_ITEMS_DATA,
  ALIGN_ITEMS_ENUM,
  ALIGN_ITEMS_TYPE,
  JUSTIFY_CONTENT_DATA,
  JUSTIFY_CONTENT_ENUM,
  JUSTIFY_CONTENT_TYPE,
} from "./const";
import {
  FLEXBOX_GAP_DATA,
  FLEXBOX_GAP_ENUM,
  FLEXBOX_GAP_TYPE,
} from "../../theme/container-style";
import styled from "styled-components";
import { css } from "styled-components";

const Component: React.FC<{
  children?: ReactNode;
  gap?: FLEXBOX_GAP_TYPE;
  justifyContent?: JUSTIFY_CONTENT_TYPE;
  alignItems?: ALIGN_ITEMS_TYPE;
  width?: string;
}> = ({
  children,
  gap = FLEXBOX_GAP_ENUM.XS,
  justifyContent = JUSTIFY_CONTENT_ENUM.CENTER,
  alignItems = ALIGN_ITEMS_ENUM.CENTER,
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
  justifyContent: JUSTIFY_CONTENT_TYPE;
  alignItems: ALIGN_ITEMS_TYPE;
}>`
  ${({ width, justifyContent, alignItems, gap }) => {
    return css`
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      max-width: ${width};
      justify-content: ${JUSTIFY_CONTENT_DATA[justifyContent]};
      align-items: ${ALIGN_ITEMS_DATA[alignItems]};
      gap: ${FLEXBOX_GAP_DATA[gap]};
    `;
  }}
`;

export default Component;
