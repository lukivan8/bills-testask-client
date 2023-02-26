import {ReactNode} from 'react';
import styled from "styled-components";
import {StylingProps} from "./const";

const Component: React.FC<{
  gap?: number;
  children?: ReactNode
}> = ({gap, children}) => {
  return (
    <Grid gap={gap}>
      {children}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  gap: ${({gap}: StylingProps) => gap ? gap : "16px"};
  width: 90%;
  margin: 0 auto;
`

export default Component;