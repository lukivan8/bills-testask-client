import {ReactNode} from 'react';
import styled from "styled-components";
import {StylingProps} from "./const";


const Component:React.FC<{
  children?: ReactNode;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}> = ({children, gap=0, justifyContent="center", alignItems="center", width=""}) => {
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
  justify-content: ${({justifyContent}:StylingProps) => justifyContent};
  align-items: ${({alignItems}: StylingProps) => alignItems};
  gap: ${({gap}: StylingProps) => gap + "px"};
  max-width: ${({width}: StylingProps) => width + "%"};
`

export default Component;