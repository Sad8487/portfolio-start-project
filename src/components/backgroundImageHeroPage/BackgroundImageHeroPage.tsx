import React from "react";
import IconsSprite from "../../assets/img/IconsSprite.svg";
import styled from "styled-components";


type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

const StyledIcon = styled.svg`
    width: 800px;
    height: 880px;
    object-fit: cover;
    margin-bottom: -95px;
`

export const BackgroundImageHeroPage = (props: IconPropsType) => {
  return (
    <StyledIcon width= {props.width || "632"}  height={props.height || "674"} viewBox={props.viewBox || "0 0 879 880"} >
      <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
    </StyledIcon>
  );
};
