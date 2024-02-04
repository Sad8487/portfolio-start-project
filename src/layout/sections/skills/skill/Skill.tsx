import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
  viewBox: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        veiwBox={props.viewBox}
        width="100"
        height="100"
      />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: #9e9d9d92;
`;
const SkillTitle = styled.h3``;
const SkillText = styled.p``;
