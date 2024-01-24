import {EventData} from './api-chicago-art.interface';

export interface ArtEvent {
  id: number;
  api_link: string;
  title: string;
  image_url: string;
  short_description: string;
  start_date: string;
  end_date: string;
  date_display: string;
}

export interface EventsResponse {
  pagination: EventData['pagination'];
  artEvents: Array<ArtEvent>;
}

export interface ArtEventDetail {
  image: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  dateDisplay?: string;
}
