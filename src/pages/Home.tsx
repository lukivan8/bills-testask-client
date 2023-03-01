import {IonContent, IonRouterLink} from '@ionic/react';
import {TextElem} from "../common/text-elem";
import {ImageElem} from "../common/image-elem";
import NoteIcon from "../assets/svg/note-text.svg"
import {Toolbar} from "../common/layout-toolbar";
import {ItemWrapper} from "../common/item-wrapper";
import {Card} from '../common/card';
import {Stack} from "../common/stack";
import {ListLayout} from "../common/list-layout";
import {useQuery} from "react-query";
import React from "react";
import {StyledIonPage} from "../theme/global.styled";
import {SLOT} from "../common/item-wrapper/const";
import {ALIGN_ITEMS, JUSTIFY_CONTENT} from "../common/stack/const";


export interface BillData {
  billId: number,
  transactionType: string,
  provider: string,
  privateAccount: number,
  paymentAmount: number,
  creationTime: string
}

const formatDate = (timestamp: string) => {
  console.log(timestamp)
  timestamp = timestamp.replaceAll("-", "/");
  timestamp = timestamp.replace("T", " ");
  timestamp = timestamp.slice(0, 16)
  return timestamp;
}



const Home = () => {
    const {data, isLoading} = useQuery('bills', async () => {
      const data = await fetch('http://localhost:3000/bill/list')
      const result = await data.json();
      console.log(result)
      return result;
    });

    return (
      <StyledIonPage>
        <Toolbar>
          <ItemWrapper slot={SLOT.START}>
            <TextElem size={9} weight="bold" color="black" tid="BILL.HEADER.HISTORY"/>
          </ItemWrapper>
          <ItemWrapper slot={SLOT.END}>
            <IonRouterLink href="/create">
              <ImageElem src={NoteIcon} width={24} height={24}/>
            </IonRouterLink>
          </ItemWrapper>
        </Toolbar>
        <IonContent>
          <ListLayout>
            {isLoading ? <TextElem size={10}>Loading...</TextElem> :
              data.map((bill: BillData) => {
                return (<Card key={bill.billId}>
                  <Stack alignItems={ALIGN_ITEMS.FLEX_START} justifyContent={JUSTIFY_CONTENT.UNSET}>
                    <TextElem size={9} tid={"BILL.SERVICE_LABEL."+bill.transactionType}/>
                  </Stack>
                  <Stack alignItems={ALIGN_ITEMS.FLEX_END} justifyContent={JUSTIFY_CONTENT.SPACE_BETWEEN}>
                    <TextElem color="secondary" size={7}>{formatDate(bill.creationTime)}</TextElem>
                    <TextElem size={10}>{bill.paymentAmount.toFixed(2)}</TextElem>
                  </Stack>
                </Card>)
              })
            }
          </ListLayout>
        </IonContent>
      </StyledIonPage>
    );

  }
;

export default Home;
