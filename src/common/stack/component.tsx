import {ReactNode} from 'react';
import styled from "styled-components";
import {ALIGN_ITEMS, JUSTIFY_CONTENT, STYLING_PROPS} from "./const";
import {FLEXBOX_GAP_ENUM, FLEXBOX_GAP_TYPE} from "../../theme/container-style";


const Component: React.FC<{
  children?: ReactNode;
  gap?: FLEXBOX_GAP_TYPE;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: ALIGN_ITEMS;
  width?: string;
}> = ({
        children,
        gap = FLEXBOX_GAP_ENUM.NONE,
        justifyContent = JUSTIFY_CONTENT.CENTER,
        alignItems = ALIGN_ITEMS.CENTER,
        width
      }) => {
  return (
    <Stack gap={gap}
           justifyContent={justifyContent}
           alignItems={alignItems}
           width={width}>
      {children}
    </Stack>
  );
};

const Stack = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: ${({justifyContent}: STYLING_PROPS) => justifyContent};
  align-items: ${({alignItems}: STYLING_PROPS) => alignItems};
  gap: ${({gap}: STYLING_PROPS) => gap};
  max-width: ${({width}: STYLING_PROPS) => width + "%"};
`

export default Component;