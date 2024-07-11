import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

const StyledMenu = styled.nav`
  ul {
    display: flex;
    color: #fff;
    list-style: none;
    gap: 150px;
    font-family: 'Arodora Pro';
    font-size: 18px;
    font-weight: 300;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};
