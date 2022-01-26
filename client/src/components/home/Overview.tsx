import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

const Overview: FC = () => {
  return (
    <Wrapper>
      Loading...
    </Wrapper>
  );
};

export default Overview;