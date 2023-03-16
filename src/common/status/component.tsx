import React from "react";
import styled, { css } from "styled-components";
import { FONT_SIZE_DATA, FONT_SIZE_ENUM } from "../../theme/sizes";
import {STATUS_COLOR_DATA} from "../../theme/color";

const Status: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <React.Fragment>
      {message && (
        <StyledContainer message={message}>{message}</StyledContainer>
      )}
    </React.Fragment>
  );
};

const StyledContainer = styled.div<{ message: string }>`
  width: 100%;
  font-size: ${FONT_SIZE_DATA[FONT_SIZE_ENUM.FOCUS]};
  border: solid;
  border-radius: 10px;
  padding: 10px ;
  ${({message}) => {
  return css`
      border-color: ${message === "Successful!" ? STATUS_COLOR_DATA["success"] : STATUS_COLOR_DATA["error"]};
      color: ${message === "Successful!" ? STATUS_COLOR_DATA["success"] : STATUS_COLOR_DATA["error"]};
    `;
}}
`;

export default Status;
