import styled from "styled-components";
import { TitleSection } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <TitleSection>I'm Available for Freelance</TitleSection>
      <Button>Hire Me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #22769c;
`;
