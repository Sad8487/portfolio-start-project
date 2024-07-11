import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

const StyledLogo = styled.a`
  span {
    color: #fff;
    font-family: 'NEXT ART', serif;
    font-size: 18px;
    font-weight: 500;
  }
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const Logo = () => {
  return (
    <StyledLogo href="">
      <Icon iconId={`logo`} />
      <span>Notitanic</span>
    </StyledLogo>
  );
};
