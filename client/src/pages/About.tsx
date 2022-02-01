import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const About: FC = () => {
  return (
    <Wrapper>
      <h2 id="about">Om Tech Talks</h2>
      <p>
        <b>Tech Talks</b> er et faglig orientert arrangement, arrangert av{' '}
        <a href="https://www.facebook.com/ekskomOnline">Ekskursjonskomiteen</a>{' '}
        i samarbeid med linjeforeningen for informatikk ved NTNU,{' '}
        <a href="https://online.ntnu.no/">Online</a>. Ekskursjonskomiteens
        oppgave er å arrangere tredje årstrinn ved informatikkstudiet sin årlige
        ekskursjon.
      </p>
    </Wrapper>
  );
};

export default About;
