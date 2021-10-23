import React from "react";
import styled from "styled-components";
import Section from "./Section";
import HomeSectionData from "../Data/HomeSection";

const Home = () => {
  return (
    <Container>
      {HomeSectionData.map((data, index) => (
        <Section title={data.title} desc={data.desc} span={data.span} button1={data.button1} button2={data.button2} img={data.img} index={index} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
`;
