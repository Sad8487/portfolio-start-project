import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -20px;
  right: -100px;
  z-index: 99999999;
  background-color: transparent;
  border: none;

  span {
    display: block;
    width: 36px;
    height: 2px;
    position: absolute;
    top: 20px;
    background-color: transparent;
    right: 100px;

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: #00c4f0;
      position: absolute;
      top: 20px;
      right: 100px;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0), rotate(-45deg);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: #00c4f0;
      position: absolute;
      top: 20px;
      right: 100px;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0), rotate(45deg);
        `}
    }
  }
`;

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1900000;
  background-color: #1f1f1f;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    color: #fff;
    list-style: none;
    gap: 150px;
    font-family: "Arodora Pro";
    font-size: 18px;
    font-weight: 300;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuWrapper isOpen={true}>
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
      </MobileMenuWrapper>
    </StyledMobileMenu>
  );
};
