import { IonContent, IonRouterLink } from "@ionic/react";
import { TextElem } from "../common/text-elem";
import { ImageElem } from "../common/image-elem";
import NoteIcon from "../assets/svg/note-text.svg";
import { Toolbar } from "../common/layout-toolbar";
import { ItemWrapper } from "../common/item-wrapper";
import { Card } from "../common/card";
import { Stack } from "../common/stack";
import { ListLayout } from "../common/list-layout";
import { useQuery } from "react-query";
import React from "react";
import { StyledIonPage } from "../theme/global.styled";
import Moment from "react-moment";

export interface BillData {
  billId: number;
  transactionType: string;
  provider: string;
  privateAccount: number;
  paymentAmount: number;
  creationTime: string;
}

const Home = () => {
  const { data, isLoading } = useQuery("bills", async () => {
    const data = await fetch("http://localhost:3000/bill/list");
    const result = await data.json();
    console.log(result);
    return result;
  });

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
          <IonRouterLink href="/create">
            <ImageElem src={NoteIcon} width={24} height={24} />
          </IonRouterLink>
        </ItemWrapper>
      </Toolbar>
      <IonContent>
        <ListLayout>
          {isLoading ? (
            <TextElem size="focus">Loading...</TextElem>
          ) : (
            data.map((bill: BillData) => {
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
;

export default Home;
