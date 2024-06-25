import React from "react";
import styled from "styled-components";
import portfolioSlider from "../../assets/img/image-4.webp";
import strelka from "../../assets/img/Vector 2.png";
import { IconLeftArrow, IconRightArrow } from "../buttonPortfolio/ButtonPortfolio";

const StyledSectionPortfolio = styled.section`
  background-color: #2c2c2c;
  padding: 0px 0px 100px 0px;
`;

const StyledTitlePortfolio = styled.h3`
  margin: 0px;
  font-family: "NEXT ART", serif;
  font-size: 48px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  padding: 50px 0px; 
`;

const StyledImageSlider = styled.img`
  width: 493px;
  height: 500px;
  border-radius: 20px;
`;

const StyledContainerSlayder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainerSlayderDiv = styled.div`
  width: 970px;
  height: 600px;
  background-color: #414141;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  gap: 50px;
  font-family: "Arodora Pro", serif;
  text-align: center;
`;

const StyledTitlePortfolioSlayder = styled.h3`
  font-size: 24px;
  color: #fff;
`;

const StyledContainerTitle = styled.div`
  width: 296px;
  height: 436px;
`;

const StyledP = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
`;

const SyledButton = styled.button`
  width: 300px;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #e2a100;
  justify-content: center;
  border-color: transparent;
  font-size: 18px;
  font-family: "Arodora Pro", serif;
  font-weight: 300;
  gap: 10px;
  cursor: pointer;
  &::after {
    content: "";
    width: 14px;
    height: 8px;
    background-image: url(${strelka});
    background-repeat: no-repeat;
    display: block;
  }
`;

export const PortfolioPage = () => {
  return (
    <StyledSectionPortfolio>
      <StyledTitlePortfolio>Portfolio</StyledTitlePortfolio>
      <StyledContainerSlayder>
        <IconLeftArrow iconId="strelkaNalevo" />
        <StyledContainerSlayderDiv>
          <StyledImageSlider src={portfolioSlider}></StyledImageSlider>
          <StyledContainerTitle>
            <StyledTitlePortfolioSlayder>
              Landing Ice-cream
            </StyledTitlePortfolioSlayder>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              orci eu elit consequat posuere ut sed elit. Nulla et tristique
              felis. Morbi quis orci non purus blandit fringilla. Etiam et
              mollis eros. Duis venenatis vulputate lacus, non tristique eros
              placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris
              nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim
              purus, tempor sed massa vel, accumsan bibendum magna. Nullam
              hendrerit cursus purus, sit amet viverra arcu gravida vel.
            </StyledP>
            <SyledButton>More</SyledButton>
          </StyledContainerTitle>
        </StyledContainerSlayderDiv>
        <IconRightArrow iconId="strelkaNapravo" />
      </StyledContainerSlayder>
    </StyledSectionPortfolio>
  );
};
