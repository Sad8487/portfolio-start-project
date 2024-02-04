import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <StyledText>
            Text messages are used for personal, family, business, and social
            purposes. Governmental and non-governmental organizations use text
            messaging for communication between colleagues. In the 2010s, the
            sending of short informal messages became an accepted part of many
            cultures, as happened earlier with emailing.[1] This makes texting a
            quick and easy way to communicate with friends, family, and
            colleagues, including in contexts where a call would be impolite or
            inappropriate{" "}
          </StyledText>
          <StyledTitle>@Vladislav Sischin</StyledTitle>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Slide = styled.div`
  text-align: center;
`;
const StyledText = styled.p``;
const StyledTitle = styled.span``;
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    margin-top: 25px;
    border-radius: 3cap;
    background-color: #3d0423;
  }
`;
