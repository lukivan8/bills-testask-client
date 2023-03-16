import React, { ReactNode } from "react";
import styled from "styled-components";
import { IonToolbar } from "@ionic/react";

const Component: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled(IonToolbar)`
  --padding-start: 0px;
  --background: none;
  margin: 12px 0;
`;

export default Component;