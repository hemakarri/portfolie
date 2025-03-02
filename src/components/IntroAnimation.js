import React from "react";
import Typical from "react-typical";
import styled from "styled-components";
import "./IntroAnimation.css";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  overflow: hidden;
`;

const Name = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-shadow: 0 0 20px #00ffcc, 0 0 30px #00ffcc;
  letter-spacing: 5px;
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
    }
    to {
      text-shadow: 0 0 20px #00ffcc, 0 0 40px #00ffcc;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #00ffcc;
  letter-spacing: 3px;
  margin-top: 10px;
  opacity: 0.8;
  animation: fadeIn 3s ease-in-out;
`;

const IntroAnimation = () => {
  return (
    <Container>
      <div className="animation-box">
        <Name>Karri Hema Prasad</Name>
        <Subtitle>
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={["Frontend Developer 💻", 2000, "React.js Specialist ⚛️", 2000]}
          />
        </Subtitle>
      </div>
    </Container>
  );
};

export default IntroAnimation;
