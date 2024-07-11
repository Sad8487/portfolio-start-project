import React from "react";
import IconsSprite from '../../../src/assets/img/IconsSprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

const StyledIconReact = styled.svg`
    object-fit: cover;
`

const StyledIconFrontend = styled.svg`
    object-fit: cover;
`

export const IconTypeScript = (props: IconPropsType) => {
    return (
        <StyledIconReact width= {props.width || "120"}  height={props.height || "110"} viewBox={props.viewBox || "0 0 137 137"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconReact>
    )
}

export const IconFrontend = (props: IconPropsType) => {
    return (
        <StyledIconFrontend width= {props.width || "75"}  height={props.height || "110"} viewBox={props.viewBox || "0 0 75 45"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconFrontend>
    )
}

export const IconCSS = (props: IconPropsType) => {
    return (
        <StyledIconFrontend width= {props.width || "104"}  height={props.height || "110"} viewBox={props.viewBox || "0 0 104 90"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconFrontend>
    )
}

export const IconReact = (props: IconPropsType) => {
    return (
        <StyledIconFrontend width= {props.width || "105"}  height={props.height || "113"} viewBox={props.viewBox || "0 0 24 18"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconFrontend>
    )
}

export const IconHTML = (props: IconPropsType) => {
    return (
        <StyledIconFrontend width= {props.width || "100"}  height={props.height || "113"} viewBox={props.viewBox || "0 0 28 20"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconFrontend>
    )
}

export const IconJS = (props: IconPropsType) => {
    return (
        <StyledIconFrontend width= {props.width || "100"}  height={props.height || "113"} viewBox={props.viewBox || "0 0 24 20"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconFrontend>
    )
}

export const IconBackEnd = (props: IconPropsType) => {
    return (
        <StyledIconFrontend width= {props.width || "90"}  height={props.height || "113"} viewBox={props.viewBox || "0 0 80 60"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`} />
        </StyledIconFrontend>
    )
}