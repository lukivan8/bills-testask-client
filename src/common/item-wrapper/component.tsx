import React, { ReactNode } from "react";
import styled from "styled-components";
import { IonItem } from "@ionic/react";
import { SLOT_TYPE } from "./const";

const Component: React.FC<{
  slot?: SLOT_TYPE;
  children: ReactNode;
}> = ({ slot, children }) => {
  return (
    <Item slot={slot} lines="none">
      {children}
    </Item>
  );
};

const Item = styled(IonItem)`
  --ion-background-color: none;
  --background: none;
  --padding-start: 5px;
  --ion-safe-area-left: 5px;
`;

export default Component;