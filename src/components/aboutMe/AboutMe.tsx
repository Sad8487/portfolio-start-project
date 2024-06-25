import React from "react";
import styled from "styled-components";
import photo1 from "../../assets/img/photo1.webp";
import photo2 from "../../assets/img/photo2.webp";
import photo3 from "../../assets/img/photo3.webp";
import elipsee from "../../assets/img/Ellips.svg";

const StyledAboutMe = styled.p`
  width: 370px;
  heigth: 700px;
  font-size: 20px;
  font-family: Arodora Pro, serif;
  color: #fff;
  font-weight: 300;
  background-color: #2c2c2c;
  padding: 55px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
    &::before {
    content: "";
    background-image: url(${photo3});
    background-size: cover;
    display: inline-block;
    height: 320px; 
    width: 272px; 
    position: absolute;
    z-index: 1000;
    left: -295px;
    top: 400px;
    border: 25px solid #2c2c2c;
    border-radius: 10px;
    outline: 5px solid #606060;
    outline-offset: -30px;
`;

const StyledSection = styled.section`
  height: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #414141;
  position: relative;
  z-index: 0;
    &::before {
    content: "";
    background-image: url(${elipsee});
    background-repeat: no-repeat;
    background-size: 88%;
    height: 100%; 
    width: 100%; 
    position: absolute;
    z-index: 0;
    left: 27px;
    top: 196px;
`;

const StyledTitleAboutMe = styled.h3`
  font-size: 48px;
  font-family: "NEXT ART", serif;
  color: #fff;
  font-weight: 400;
  z-index: 1;
  transform: translate3d(-60px,95px,50px);
  &::before {
    content: "";
    background-image: url(${photo2});
    background-size: cover;
    display: inline-block;
    height: 320px;
    width: 272px;
    position: absolute;
    z-index: 1000;
    left: -350px;
    top: 0px;
    border: 25px solid #2c2c2c;
    border-radius: 10px;
    outline: 5px solid #606060;
    outline-offset: -30px;
  }
  &::after {
    content: "";
    background-image: url(${photo1});
    background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
    height: 320px;
    width: 272px;
    position: absolute;
    z-index: 1000;
    left: 360px;
    top: 220px;
    border: 25px solid #2c2c2c;
    border-radius: 10px;
    outline: 5px solid #606060;
    outline-offset: -30px;
  }
`;

export const AboutMePage = () => {
  return (
    <StyledSection>
      <StyledTitleAboutMe>About Me</StyledTitleAboutMe>
      <StyledAboutMe>
        Hello again everyone! So, you already know that my name is Radik. A
        little about myself: student, 19 y.o., I love creativity since
        childhood, I live in Belebey, Russia. Why programming? Everything is
        elementary - I like it, the profession of the future, thanks to which I
        can provide myself and fulfill my dream - travel, at the moment I
        specialize in front-end and back-end development, turnkey websites. Why
        should you choose me? I approach each order with great responsibility
        and love, as I want to make a name for myself, exclude plagiarism and
        negligence, fully study the project, the client and its target audience,
        work for quality, trying to make an order as quickly and uniquely as
        possible, taking into account all the edits and wishes. By trusting me,
        you will get the maximum return for your project, save your nerves and
        time. If you are interested in me , you want to know something more or
        use my services, then I will provide all my contacts below.
      </StyledAboutMe>
    </StyledSection>
  );
};
