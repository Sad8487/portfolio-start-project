import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleSection } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <SkillsStyled>
      <TitleSection>My Skills</TitleSection>
      <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
        <Skill
          iconId={"html"}
          viewBox={"0 0 512 512"}
          title={"HTML5"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"css"}
          title={"Css"}
          viewBox={"0 0 32 32"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"js"}
          title={"JS"}
          viewBox={"0 0 30 26"}
          description={"some text here very soon"}
        />

        <Skill
          iconId={"react"}
          title={"React"}
          viewBox={"0 0 73 73"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"styled"}
          title={"Styled-Components"}
          viewBox={"0 0 35 35"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"typescript"}
          title={"Typescript"}
          viewBox={"1 0 30 26"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"mongo"}
          title={"MongoDB"}
          viewBox={"0 -30 120 164"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"nest"}
          title={"Git"}
          viewBox={"0 0 032 032"}
          description={"some text here very soon"}
        />
        <Skill
          iconId={"git-hub"}
          title={"Git-Hub"}
          viewBox={"0 0 70 70"}
          description={"some text here very soon"}
        />
      </FlexWrapper>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  min-height: 100vh;
`;
