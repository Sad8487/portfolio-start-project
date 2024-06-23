import React from "react";
import { BackgroundImageHeroPage } from "../../components/backgroundImageHeroPage/BackgroundImageHeroPage";
import styled from "styled-components";
import photo from "../../assets/img/i_m.webp";
import {
  IconCSS,
  IconFrontend,
  IconHTML,
  IconJS,
  IconReact,
  IconTypeScript,
} from "../../components/itemIcons/ItemIcons";

const StyledHeroPage = styled.div`
  width: 1440px;
  display: flex;
  height: 716px;
  align-items: center;
  background-color: #2c2c2c;
  padding: 40px 0px 0px 160px;
  gap: 100px;
`;

const StyledTitle = styled.div`
  width: 447px;
  height: 377px;
  span {
    color: #fff;
    font-size: 48px;
    font-family: "NEXT-ART", sans-serif;
    font-weight: 900;
    margin: 0px;
  }
  h2 {
    color: #fff;
    font-size: 72px;
    font-family: "NEXT-ART", sans-serif;
    font-weight: 700;
    margin: 0px;
  }
  h1 {
    width: 430px;
    color: #e4e4e4;
    font-size: 18px;
    font-family: "Arodora Pro", sans-serif;
    font-weight: 100;
    margin-top: 10px;
  }
`;

const StyledImage = styled.img`
  width: 450px;
  position: absolute;
  top: 162px;
  left: 900px;
`;

const StyledButton = styled.button`
  background-color: #e2a300;
  color: #000;
  padding: 10px 35px;
  font-size: 18px;
  font-family: "NEXT ART", sans-serif;
  font-weight: 700;
  margin-top: 20px;
  border-radius: 6px;
  box-shadow: 0px 2px 13px 0px rgba(226, 158, 0, 0.45);
  pointer-events: none;
`;

const StyledItem = styled.div`
  width: 230px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2a2a2a;
  border-radius: 25px;
  box-shadow: -1px 11px 12px -4px rgba(0, 0, 0, 0.75);
`;

const StyledNameItem = styled.h3`
  font-size: 24px;
  margin: 25px 0px 0px 0px;
  font-family: Arodora Pro, serif;
  color: #fff;
`;

const StyledSkills = styled.div`
  width: 1440px;
  background-color: #414141;
  display: flex;
  flex-wrap: wrap;
  gap: 73px;
  justify-content: center;
  padding: 90px 0px;
`;

export const Main = () => {
  return (
    <main>
      <StyledHeroPage>
        <StyledTitle>
          <span>HELLO</span>
          <h2>I’M RADIK BIKTAGIROV</h2>
          <h1>
            I've been doing web design, front-end development for a six month
            now. Do you need a website , site layout, or maybe a turnkey
            website? Then contact me
          </h1>
          <StyledButton>CONTACT ME</StyledButton>
        </StyledTitle>
        <div>
          <BackgroundImageHeroPage iconId={"backgroundHomePage"} />
          <StyledImage src={photo} />
        </div>
      </StyledHeroPage>
      <StyledSkills>
        <StyledItem>
          <IconTypeScript iconId={"reactIcon"} />
          <StyledNameItem>Type Script</StyledNameItem>
        </StyledItem>
        <StyledItem>
          <IconFrontend iconId={"frontend"} />
          <StyledNameItem>Frontend</StyledNameItem>
        </StyledItem>
        <StyledItem>
          <IconCSS iconId={"cssIcon"} />
          <StyledNameItem>CSS</StyledNameItem>
        </StyledItem>
        <StyledItem>
          <IconReact iconId={"tag"} />
          <StyledNameItem>React</StyledNameItem>
        </StyledItem>
        <StyledItem>
          <IconHTML iconId={"html5"} />
          <StyledNameItem>HTML</StyledNameItem>
        </StyledItem>
        <StyledItem>
          <IconJS iconId={"javaScript"} />
          <StyledNameItem>JavaScript</StyledNameItem>
        </StyledItem>
        <StyledItem>
          <IconCSS iconId={"cssIcon"} />
          <StyledNameItem>CSS</StyledNameItem>
        </StyledItem>
      </StyledSkills>
    </main>
  );
};
