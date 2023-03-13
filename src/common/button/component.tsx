import React, { MouseEventHandler } from "react";
import { IonButton } from "@ionic/react";
import styled from "styled-components";
import { TextElem } from "../text-elem";
import {
  BUTTON_FILL_ENUM,
  BUTTON_FILL_TYPE,
  BUTTON_FUNCTION_TYPE,
  BUTTON_TEXT_COLOR,
} from "./const";

const Component: React.FC<{
  label: string;
  fill?: BUTTON_FILL_TYPE;
  type?: BUTTON_FUNCTION_TYPE;
  disabled?: boolean;
  href?: string;
  onClick?: MouseEventHandler<any> | undefined;
}> = ({
  label,
  fill = BUTTON_FILL_ENUM.SOLID,
  type,
  disabled,
  href,
  onClick,
}) => {
  return (
    <Button
      href={href}
      disabled={disabled}
      type={type}
      fill={fill}
      onClick={onClick}
    >
      <TextElem
        weight="semi-bold"
        color={BUTTON_TEXT_COLOR[fill]}
        tid={label}
      />
    </Button>
  );
};

const Button = styled(IonButton)`
  width: 100%;
`;

export default Component;