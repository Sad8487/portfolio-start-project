import styled from "styled-components";
import profilePic from "../../../assets/images/haha.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <h2>My Name is Vladislav Sischin</h2>
          <MainTitle>I'm Web Developer</MainTitle>
        </div>
        <ProfilePic src={profilePic} alt="Me" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #0c0b0b9e;
`;

const ProfilePic = styled.img`
  margin-top: 25px;
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius: 3cap;
`;

const MainTitle = styled.h1``;
