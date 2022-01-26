import { COMPANIES_URL, CompanyResponse } from '.';

async function fetchCompanies(): Promise<CompanyResponse[]> {
  const response = await fetch(COMPANIES_URL);
  if (response.ok) {
    return (await response.json()) as CompanyResponse[];
  }
  return [];
}

export default fetchCompanies;
