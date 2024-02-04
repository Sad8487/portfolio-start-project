import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Vladislav Sischin</Name>

        <SocialItemList>
          <SocialItem>
            <SocialIconLink>
              <Icon
                iconId={"linked"}
                veiwBox={"0 0 256 256"}
                height={"20px"}
                width={"20"}
              />
              <Icon
                iconId={"gmail"}
                veiwBox={"0 0 512 512"}
                height={"20px"}
                width={"20"}
              />
              <Icon
                iconId={"telegram"}
                veiwBox={"0 0 256 256"}
                height={"20px"}
                width={"20"}
              />
              <Icon
                iconId={"git-hub"}
                veiwBox={"0 0 70 70"}
                height={"20px"}
                width={"20"}
              />
            </SocialIconLink>
          </SocialItem>
        </SocialItemList>
        <Copyright>@2024 Vladislav Sischin</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #d2e797;
  min-height: 30vh;
`;
const Name = styled.h4``;
const SocialItem = styled.div``;
const SocialItemList = styled.ul`
  display: flex;
  gap: 20px;
`;
const SocialIconLink = styled.a``;
const Copyright = styled.small``;
