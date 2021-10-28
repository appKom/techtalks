import React, {FC} from "react";
import styled from "styled-components";

import Navbar from "./NavBar";
import About from "./About";
import Samarbeidspartnere from "./SamarbeidsPartnere";
import Program from "./Program";
import Overview from "./Overview";

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
      <Navbar />
      <Content>
        <Overview />
        <Program />
        <Samarbeidspartnere />
        <About />
      </Content>
    </Wrapper>
  );
};

export default Home;

/*

<Overview events={program} />
        <Program events={program} />
        <Samarbeidspartnere partners={partners} />
        <About event={event} />

*/
