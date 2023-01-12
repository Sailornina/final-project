import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../lotties/planet";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ChildContainer>
      <StyledHeading> WAIT ... Space is loading ... </StyledHeading>
      <Lottie
        animationData={animationData}
        options={defaultOptions}
        height={400}
        width={400}
      />
    </ChildContainer>
  );
};

export default Loading;

export const ChildContainer = styled.div`
  box-sizing: border-box;
  padding: 1.5em;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const StyledHeading = styled.h1`
  color: #3fceea;
  font-size: 1.2em;
  line-height: 2em;
`;
