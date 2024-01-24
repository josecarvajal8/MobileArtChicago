import {
  ApiResponseEvents,
  EventDetail,
} from '../model/api-chicago-art.interface';
import {ArtEventDetail, EventsResponse} from '../model/art-events';
import {sanitizeWebTags} from '../utils/adapters';
import {fetchData} from '../utils/fetcher';

export const getEvents = async (
  url = 'https://api.artic.edu/api/v1/events?limit=10',
): Promise<EventsResponse> => {
  const {data, pagination} = await fetchData<ApiResponseEvents>({
    method: 'GET',
    url,
  });
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
  return {
    pagination,
    artEvents,
  };
};

export const getEventDetail = async (url: string): Promise<ArtEventDetail> => {
  const {data} = await fetchData<{data: EventDetail}>({
    method: 'GET',
    url,
  });
  return {
    image: data.image_url,
    description: data.description,
    location: data.location,
    startDate: data.start_date,
    endDate: data.end_date,
    dateDisplay: data.date_display,
  };
};
