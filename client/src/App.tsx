import React, {FC} from 'react';
import styled from 'styled-components';
import Content from './components/common/Content';
import Footer from './components/common/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
`;

const App:FC = () => {
  return (
    <Wrapper>
      <Content />
      <Footer />
    </Wrapper>
  );
}

export default App;
