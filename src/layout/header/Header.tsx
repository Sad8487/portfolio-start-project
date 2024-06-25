import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 160px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};
