import React from 'react';
import styled, {keyframes} from "styled-components";

const Component = () => {
  return (
    <Loader>
      
    </Loader>
  );
};
const loaderAnim = keyframes`
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
`;

const Loader = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;



  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #3dc2ff;
    animation: ${loaderAnim} 2s linear infinite;
  }
`


export default Component;