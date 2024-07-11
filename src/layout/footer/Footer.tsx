import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";

const StyledFooter = styled.footer`
  width: 100%;
  height: 250px;
  background-color: #414141;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainerFooter = styled.div`
  width: 773px;
  height: 138px;  
  display: flex;
  gap: 35px;
`;

const StyledLink = styled.div`
    ul {
    list-style: none;
    text-decoration: none;
    line-height: 36px;
    }
    a {
        font-size: 18px;
        color: #fff;
        font-family: 'Arodora Pro', serif;
        font-weight: 300;
    }
`   

const StyledContact = styled.div`
    ul {
    list-style: none;
    text-decoration: none;
    line-height: 37.5px;
    }
    li {
        font-size: 18px;
        color: #fff;
        font-family: 'Arodora Pro', serif;
        font-weight: 300;
    }
`   

const StyledCorp = styled.div`
    height: 250px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    line-height: 45px;
    h3 {
        color: #fff;
        font-size: 18px;
        font-family: 'Arodora Pro', serif;
        font-weight: 300;
    }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainerFooter>
        <StyledLink>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </StyledLink>
        <StyledContact>
          <ul>
            <li>Contact</li>
            <li>Email: radikbiktagirov355@gmail.com</li>
            <li>Inst: _bik_tagirov_</li>
            <li>Calls: +7 (000) - 000 - 00 -00</li>
          </ul>
        </StyledContact>
        <StyledCorp>
            <Logo></Logo>
            <h3>Copyright © 2024, Notitanic</h3>
        </StyledCorp>
      </StyledContainerFooter>
    </StyledFooter>
  );
};
