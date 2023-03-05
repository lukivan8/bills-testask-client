import React from "react";
import { TextElem } from "../text-elem";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Field } from "formik";

const Component: React.FC<{
  label?: string;
  placeholder?: string;
  name: string;
}> = ({ label, placeholder, name }) => {
  const { t } = useTranslation();
  return (
    <div>
      {label && <TextElem weight="bold" tid={label} />}
      <Field
        placeholder={placeholder ? t(placeholder) : ""}
        name={name}
        as={Input}
      ></Field>
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
`;

export default Component;