import {ApiResponseEvents} from '../model/api-chicago-art.interface';
import {EventsResponse} from '../model/art-events';
import {sanitizeWebTags} from '../utils/adapters';
import {fetchData} from '../utils/fetcher';

export const getEvents = async (): Promise<EventsResponse> => {
  const {data, pagination} = await fetchData<ApiResponseEvents>({
    method: 'GET',
    url: 'https://api.artic.edu/api/v1/events?limit=10',
  });
  console.log(pagination);
  const artEvents: EventsResponse['artEvents'] = data.map(el => {
    const {
      id,
      api_link,
      title,
      image_url,
      short_description,
      start_date,
      end_date,
      date_display,
    } = el;
    return {
      id,
      api_link,
      title,
      image_url,
      short_description: sanitizeWebTags(short_description ?? ''),
      start_date,
      end_date,
      date_display,
    };
  });
  console.log(artEvents);
  return {
    pagination,
    artEvents,
  };
};
