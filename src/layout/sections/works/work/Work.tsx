import styled from "styled-components";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>Demo</Link>
      <Link href={"#"}>Code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: pink;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 3cap;
`;
const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a``;
