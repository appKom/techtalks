<<<<<<< HEAD
import React, {FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchCompanies from '../../api/companies';
=======
import React, { FC } from "react";
import styled from "styled-components";
>>>>>>> 72dfb4868ec5146fd4c26a5ea76c7e3a227a697b

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AttendingIDs = [
  '1', '2', '3', '4', '5'
]

const Samarbeidspartnere: FC = () => {
<<<<<<< HEAD
  interface Company {
    id: number,
    name: string,
}

  const [companies, setCompanies] = useState<any | null>([]);

  function handleNewCompany(company:Company | any) {
    setCompanies((prevArray: any) => [
      ...prevArray,
      {
        id: company.id,
        name: company.name
      }]);
  }

  useEffect(() => {
    AttendingIDs.map((id) => (
      fetchCompanies(id).then((company) => handleNewCompany(company))
    ))
  }, [])

  console.log(companies)
  return (
    <Wrapper>
      {companies.map((data:Company) => (
        <>
          <p>{data.id}</p>
          <p>{data.name}</p>
        </>
      ))}
    </Wrapper>
  );
=======
  return <Wrapper>Loading...</Wrapper>;
>>>>>>> 72dfb4868ec5146fd4c26a5ea76c7e3a227a697b
};

export default Samarbeidspartnere;
