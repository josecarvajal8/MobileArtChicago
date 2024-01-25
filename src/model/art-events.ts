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
  image_url: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  date_display: string;
  id: string;
  title: string;
  api_link: string;
}
