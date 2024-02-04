import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledNav>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 60px;
    list-style: none;
    justify-content: center;
  }
`;
