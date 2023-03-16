import { IonContent, IonRouterLink } from "@ionic/react";
import { TextElem } from "../common/text-elem";
import NoteIcon from "../assets/svg/note-text.svg";
import { Toolbar } from "../common/layout-toolbar";
import { ItemWrapper } from "../common/item-wrapper";
import { Card } from "../common/card";
import { Stack } from "../common/stack";
import { ListLayout } from "../common/list-layout";
import { useQuery } from "react-query";
import React from "react";
import Moment from "react-moment";
import { BILL_ENTITY } from "../data/bill/const";
import { StyledIonPage } from "../theme/global.styled";
import { fetchBillData } from "../data/bill/action";
import { Loader } from "../common/loader";
import { Status } from "../common/status";
import routes from "./routes";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery("bills", fetchBillData);

  return (
    <StyledIonPage>
      <Toolbar>
        <ItemWrapper slot="start">
          <TextElem
            size="label"
            weight="bold"
            color="primary"
            tid="BILL.HEADER.HISTORY"
          />
        </ItemWrapper>
        <ItemWrapper slot="end">
          <IonRouterLink href={routes[2].path}>
            <img src={NoteIcon} width={24} height={24} alt="" />
          </IonRouterLink>
        </ItemWrapper>
      </Toolbar>
      <IonContent>
        <ListLayout>
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <Status message={"Error! " + error} />
          ) : (
            data.map((bill: BILL_ENTITY) => {
              return (
                <Card key={bill.billId}>
                  <Stack alignItems="flex-start" justifyContent="unset">
                    <TextElem
                      size="label"
                      tid={"BILL.SERVICE_LABEL." + bill.transactionType}
                    />
                  </Stack>
                  <Stack alignItems="flex-end" justifyContent="space-between">
                    <TextElem color="secondary" size="small">
                      <Moment format="YYYY/MM/DD HH:mm">
                        {bill.creationTime}
                      </Moment>
                    </TextElem>
                    <TextElem size="focus">
                      {bill.paymentAmount.toFixed(2)}
                    </TextElem>
                  </Stack>
                </Card>
              );
            })
          )}
        </ListLayout>
      </IonContent>
    </StyledIonPage>
  );
};


export default Home;
