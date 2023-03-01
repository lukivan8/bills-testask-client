import React from 'react';
import {IonButton} from "@ionic/react";
import styled from "styled-components";
import {TextElem} from "../text-elem";
import {BUTTON_FILL, BUTTON_TEXT_COLOR, BUTTON_TYPE} from "./const";
import {FONT_WEIGHT_ENUM} from "../../theme/text-style";


const Component: React.FC<{
  label: string
  fill?: BUTTON_FILL
  type?: BUTTON_TYPE
}> = ({label, fill = BUTTON_FILL.SOLID, type}) => {
  return (
    <Button type={type} fill={fill}>
      <TextElem weight={FONT_WEIGHT_ENUM.SEMI_BOLD} color={BUTTON_TEXT_COLOR[fill]} tid={label}/>
    </Button>
  );
};

const Button = styled(IonButton)`
  width: 100%;
`

export default Component;