import React, {FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchCompanies from '../../api/companies';
import { Box, Heading, LinkBox, LinkOverlay, Image, SimpleGrid } from '@chakra-ui/react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AttendingIDs = [
  '1', '2', '3', '4', '5'
]

const Samarbeidspartnere: FC = () => {
  interface Company {
    id: number,
    name: string,
    site: string,
    image: Img,
  }
  interface Img {
    id: number,
    name: string,
    xs: string,
}

  const [companies, setCompanies] = useState<any | null>([]);

  function handleNewCompany(company:Company | any) {
    setCompanies((prevArray: any) => [
      ...prevArray,
      {
        id: company.id,
        name: company.name,
        site: company.site,
        image: company.image,
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
      <SimpleGrid columns={3} spacing={10}>
        {companies.map((data:Company) => (
          <>
          
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
              <Heading size='md' my='2'>
                <LinkOverlay href={data.site}>
                  {data.name}
                </LinkOverlay>
              </Heading>
              <Image src={data.image.xs} alt={data.image.name} boxSize='150px' objectFit='contain'/>
            </LinkBox>
            
          </>
        ))}
      </SimpleGrid>
    </Wrapper>
  );
};

export default Samarbeidspartnere;
