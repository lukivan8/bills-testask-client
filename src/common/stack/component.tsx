import { ReactNode } from "react";
import styled from "styled-components";
import {
  ALIGN_ITEMS_ENUM,
  ALIGN_ITEMS_TYPE,
  JUSTIFY_CONTENT_ENUM,
  JUSTIFY_CONTENT_TYPE,
  STYLING_PROPS,
} from "./const";
import {
  FLEXBOX_GAP_DATA,
  FLEXBOX_GAP_ENUM,
  FLEXBOX_GAP_TYPE,
} from "../../theme/container-style";

const Component: React.FC<{
  children?: ReactNode;
  gap?: FLEXBOX_GAP_TYPE;
  justifyContent?: JUSTIFY_CONTENT_TYPE;
  alignItems?: ALIGN_ITEMS_TYPE;
  width?: string;
}> = ({
  children,
  gap = FLEXBOX_GAP_ENUM.NONE,
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

const Stack = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: ${({ justifyContent }: STYLING_PROPS) => justifyContent};
  align-items: ${({ alignItems }: STYLING_PROPS) => alignItems};
  gap: ${({ gap }: STYLING_PROPS) => FLEXBOX_GAP_DATA[gap]};
  max-width: ${({ width }: STYLING_PROPS) => width + "%"};
`;

export default Component;