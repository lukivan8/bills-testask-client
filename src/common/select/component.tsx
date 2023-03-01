import React from 'react';
import styled from "styled-components";
import {TextElem} from "../text-elem";
import {Field} from "formik";
import {FONT_WEIGHT_ENUM} from "../../theme/text-style";

const Component: React.FC<{
  label: string
  name: string
  optionList: { value: string, label: string }[]
  innerRef?: React.Ref<any>
}> = ({label, name, optionList, innerRef}) => {
  return (
    <div>
      <TextElem weight={FONT_WEIGHT_ENUM.BOLD} size={8} tid={label ? label : ""}/>
      <Field innerRef={innerRef} name={name} as={Select}>
        <option value=""></option>
        {optionList.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>;
        })}
      </Field>
    </div>
  );
};

const Select = styled.select`
  border: none;
  color: black;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 16px;
  width: 100%;
`

export default Component;