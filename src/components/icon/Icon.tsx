import React from "react";
import IconsSprite from '../../../src/assets/img/IconsSprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

const StyledIcon = styled.svg`
    width: 54px;
    height: 38px;
`

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon width= {props.width || "59"}  height={props.height || "42"} viewBox={props.viewBox || "0 0 59 42"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIcon>
    )
}