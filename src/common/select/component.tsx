import React from "react";
import styled from "styled-components";
import { TextElem } from "../text-elem";
import { Field } from "formik";

const Component: React.FC<{
  label: string;
  name: string;
  optionList: { value: number; label: string }[];
}> = ({ label, name, optionList }) => {
  return (
    <div>
      <TextElem weight="bold" tid={label ? label : ""} />
      <Field name={name} as={Select}>
        <option value=""></option>
        {optionList.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
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
`;

export default Component;