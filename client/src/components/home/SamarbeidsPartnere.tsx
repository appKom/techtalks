import React, {FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Samarbeidspartnere: FC = () => {
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

  const OwCompaniesUrl = 'https://old.online.ntnu.no/api/v1/companies/'
  const AttendingIDs = [
    1, 2, 3, 4, 5
  ]
  useEffect(() => {
    async function fetchCompaniesAPI(id: number) {let response = await fetch(OwCompaniesUrl + id + '/')
      response = await response.json()
      handleNewCompany(response)
    }
    AttendingIDs.map((id) => (
      fetchCompaniesAPI(id)
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
};

export default Samarbeidspartnere;