import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import blogImg from "../../../assets/images/blog.webp";
import storeImg from "../../../assets/images/store.webp";

const items1 = ["Bio Blog", "Store", "Social App", "Travel Blog"];
const items = ["ALL", "Landing Page", "React", "Spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <TitleSection>Projects</TitleSection>
      <Menu menuItems={items} />
      <FlexWrapper justify={"space-around"}>
        <Work title={"Blog"} text={"Update the Description"} src={blogImg} />
        <Work title={"Store"} text={"Update the Description"} src={storeImg} />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background-color: #858554;
`;
