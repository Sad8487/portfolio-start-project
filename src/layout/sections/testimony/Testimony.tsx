import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <TitleSection>Testimony</TitleSection>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId={"testimony"} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50%;
  background-color: #8bee8b;
`;
