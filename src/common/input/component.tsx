import React from "react";
import { TextElem } from "../text-elem";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Component: React.FC<{
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value: any;
  onChange: any;
}> = ({ label, placeholder, name, type, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <div>
      {label && <TextElem weight="bold" tid={label} />}
      <Input
        type={type}
        value={value}
        placeholder={placeholder ? `${t(placeholder)}` : ""}
        onChange={onChange}
        name={name}
      ></Input>
    </div>
  );
};

const Input = styled.input`
  color: black;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 16px;
  width: 100%;
  box-shadow: none;
  border: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

export default Component;