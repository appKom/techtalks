const BASE_URL = process.env.BASE_URL || 'http://localhost:8080/api/v1';
export const COMPANIES_URL = BASE_URL + '/companies';
export const EVENTS_URL = BASE_URL + '/event';

export type CompanyResponse = {
  name: string;
  description: string;
  logo: string;
};

export type EventResponse = {
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  registrationLink: string;
  organizer: CompanyResponse;
};
