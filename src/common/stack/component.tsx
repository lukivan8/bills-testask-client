import { ReactNode } from "react";
import styled from "styled-components";
import {
  FLEXBOX_GAP_DATA,
  FLEXBOX_GAP_ENUM,
  FLEXBOX_GAP_TYPE,
} from "../../theme/sizes";
import { STYLING_PROPS } from "./const";

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