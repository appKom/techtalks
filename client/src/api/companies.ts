import { COMPANIES_URL, CompanyResponse } from '.';

async function fetchCompanies(id: string): Promise<CompanyResponse[]> {
  const response = await fetch(COMPANIES_URL + id + '/');
  if (response.ok) {
    return (await response.json()) as CompanyResponse[];
  }
  return [];
}

export default fetchCompanies;
