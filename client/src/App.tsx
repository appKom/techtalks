import React, { FC } from 'react';
import styled from 'styled-components';
import Navbar from './components/common/NavBar';
import Content from './components/common/Content';
import Footer from './components/common/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Content />
      <Footer />
    </Wrapper>
  );
};

export default App;
