import React from "react";
import styled from "styled-components";
import { TextElem } from "../text-elem";

const Component: React.FC<{
  label: string;
  name: string;
  optionList: { value: number; label: string }[];
  onChange: any;
  value: any;
}> = ({ label, name, optionList, onChange, value }) => {
  return (
    <div>
      <TextElem weight="bold" tid={label ? label : ""} />
      <Select name={name} value={value} onChange={onChange}>
        <option value=""></option>
        {optionList.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
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