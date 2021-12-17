import { EVENTS_URL, EventResponse } from '.';

async function fetchEvents(): Promise<EventResponse[]> {
  const response = await fetch(EVENTS_URL);
  if (response.ok) {
    return (await response.json()) as EventResponse[];
  }
  return [];
}

export default fetchEvents;
