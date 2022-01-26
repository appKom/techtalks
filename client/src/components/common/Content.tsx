import React, {FC} from 'react';
import styled from 'styled-components';
import Router from '../../router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #181b1e;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MainBody: FC = () => (
  <Wrapper>
    <Router />
  </Wrapper>
);

export default MainBody;