import styled from "styled-components";
import iconSprite from "../../assets/images/sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  veiwBox?: string;
};

export const Icon = (props: IconPropsType) => {
  console.log(`Rendering Icon with ID: ${props.iconId}`);
  return (
    <svg
      version="1.1"
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.veiwBox || " 0  0 032 032 "}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  );
};
