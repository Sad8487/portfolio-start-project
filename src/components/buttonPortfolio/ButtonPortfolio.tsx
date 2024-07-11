import React from "react";
import styled from "styled-components";
import IconsSprite from '../../assets/img/IconsSprite.svg';

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

const StyledIcon = styled.svg`
    background-color: #E2A300;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 20px 0px; 0px;
    cursor:  pointer;
`

export const IconLeftArrow = (props: IconPropsType) => {
    return (
        <StyledIcon width= {props.width || "24"}  height={props.height || "24"} viewBox={props.viewBox || "0 0 24 24"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIcon>
    )
}

export const IconRightArrow = (props: IconPropsType) => {
    return (
        <StyledIcon width= {props.width || "28"}  height={props.height || "24"} viewBox={props.viewBox || "0 0 24 24"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIcon>
    )
}