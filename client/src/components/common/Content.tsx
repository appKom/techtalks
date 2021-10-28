import React, {FC} from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../home/Home';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #181b1e;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Logo = styled.img`
  height: 20rem;
`;

const MainBody: FC = () => (
  <Wrapper>
    <Logo src="/logo.svg" alt="Techtalks" />
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  </Wrapper>
);

export default MainBody;