import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  font-size: 1.5em;
  text-align: center;
  justify-content: center;
  color: #e91e63;
  display: flex;
`;
