import React, { ReactNode } from "react";
import { IonCard } from "@ionic/react";
import styled from "styled-components";

const Component: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <Card>{children}</Card>;
};

const Card = styled(IonCard)`
  background-color: white;
  padding: 14px;
  margin: 0;
`;

export default Component;