import React from "react";
import "../../styles/step.scss";
import Image from "next/image";
interface StepType {
  position: string;
  img: string;
  title: string;
  text: string;
}

const Step = ({ position, img, title, text }: StepType) => {
  return (
    <div
      className="step"
      style={{ flexDirection: position === "left" ? "row" : "row-reverse" }}
    >
      <Image alt="image" src={img} />
      <div className="stepInfo">
        <p className="step_counter">Step 1</p>
        <h6>{title}</h6>
        <p className="step_text">{text}</p>
      </div>
    </div>
  );
};

export default Step;
