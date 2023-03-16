import React from "react";
import { IonContent, IonItem, IonRouterLink } from "@ionic/react";
import ChevronLeft from "../assets/svg/chevron-left.svg";
import styled from "styled-components";
import { Toolbar } from "../common/layout-toolbar";
import { TextElem } from "../common/text-elem";
import { ItemWrapper } from "../common/item-wrapper";
import { ListLayout } from "../common/list-layout";
import { BillForm } from "../epic/bill-create-form";
import { StyledIonPage } from "../theme/global.styled";

const BackButton = styled(IonItem)`
  --ion-item-background: #2c2c2c;
  border-radius: 0 10px 10px 0;
  --padding-start: 5px;
`;

const Create = () => {
  return (
    <StyledIonPage>
      <Toolbar>
        <BackButton slot="start">
          <IonRouterLink href="/">
            <img src={ChevronLeft} alt="" />
          </IonRouterLink>
        </BackButton>
        <ItemWrapper slot="">
          <TextElem
            color="primary"
            weight="bold"
            size="label"
            tid="BILL.HEADER.CREATE"
          />
        </ItemWrapper>
      </Toolbar>
      <IonContent>
        <ListLayout>
          <BillForm />
        </ListLayout>
      </IonContent>
    </StyledIonPage>
  );
};

export default Create;
