import {ReactNode} from 'react';
import styled from "styled-components";
import {StylingProps} from "./const";


const Component:React.FC<{
  children?: ReactNode;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}> = ({children, gap, justifyContent, alignItems, width}) => {
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
  justify-content: ${({justifyContent}:StylingProps) => justifyContent ? justifyContent : "center"};
  align-items: ${({alignItems}: StylingProps) => alignItems ? alignItems : "center"};
  gap: ${({gap}: StylingProps) => gap ? gap + "px" : "0"};
  max-width: ${({width}: StylingProps) => width ? width + "%" : ""};
`

export default Component;