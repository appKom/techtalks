import React, {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import { getCompanies } from '../../api';
import { companyType } from '../../types/api';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Samarbeidspartnere: FC = () => {
  const [companies, setCompanies] = useState<companyType[]>();

  useEffect(() => {
    getCompanies().then((resp) => setCompanies(resp));
  }, []);

  if (companies === undefined) return(<Wrapper> Loading... </Wrapper>);
  return (
    <Wrapper>
      {companies[0].name}
    </Wrapper>
  );
};

export default Samarbeidspartnere;