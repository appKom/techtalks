import React, { FC } from "react";
import styled from "styled-components";

import Samarbeidspartnere from "../components/home/SamarbeidsPartnere";
import Program from "../components/home/Program";
import Overview from "../components/home/Overview";

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    @media (min-width: 64em) {
      padding: 3em;
    }
    @media (max-width: 64em) {
      padding: 1em;
    }
    flex: 1;
    border-top: 1px solid #333333;
  }
  & > div {
    padding: 2rem;
    + div {
      border-top: 1px solid #333;
    }
  }
`;

const Home: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Overview />
        <Program />
        <Samarbeidspartnere />
      </Content>
    </Wrapper>
  );
};

export default Home;
