export interface EventDetail {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  title_display: string | null;
  image_url: string;
  hero_caption: string;
  short_description: string;
  header_description: string | null;
  list_description: string;
  description: string;
  location: string;
  event_type_id: number;
  alt_event_type_ids: number[];
  audience_id: number;
  alt_audience_ids: number[];
  program_ids: number[];
  program_titles: string[];
  is_ticketed: boolean;
  ticketed_event_id: number;
  rsvp_link: string;
  buy_button_text: string;
  buy_button_caption: string;
  is_registration_required: boolean;
  is_member_exclusive: boolean;
  is_sold_out: boolean;
  is_free: boolean;
  is_private: boolean;
  is_admission_required: boolean;
  is_after_hours: boolean;
  is_virtual_event: boolean;
  virtual_event_url: string | null;
  virtual_event_passcode: string | null;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  date_display: string;
  door_time: string | null;
  layout_type: number;
  slug: string;
  entrance: string;
  join_url: string | null;
  survey_url: string | null;
  event_host_id: number | null;
  event_host_title: string | null;
  search_tags: string[] | null;
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface EventData {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string | null;
  };
  data: Array<EventDetail>;
}

interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

interface Config {
  iiif_url: string;
  website_url: string;
}

export interface ApiResponseEvents extends EventData {
  info: Info;
  config: Config;
}
