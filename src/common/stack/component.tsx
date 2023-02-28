import {ReactNode} from 'react';
import styled from "styled-components";
import {ALIGN_ITEMS, JUSTIFY_CONTENT, StylingProps} from "./const";


const Component: React.FC<{
  children?: ReactNode;
  gap?: number;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: ALIGN_ITEMS;
  width?: string;
}> = ({children, gap, justifyContent = JUSTIFY_CONTENT.CENTER, alignItems = ALIGN_ITEMS.CENTER, width}) => {
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
  justify-content: ${({justifyContent}: StylingProps) => justifyContent};
  align-items: ${({alignItems}: StylingProps) => alignItems};
  gap: ${({gap}: StylingProps) => gap + "px"};
  max-width: ${({width}: StylingProps) => width + "%"};
`

export default Component;