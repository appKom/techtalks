import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Program: FC = () => {
  return (
    <Wrapper id="program">
      <h3>Kommer snart</h3>
    </Wrapper>
  );
};

export default Program;
