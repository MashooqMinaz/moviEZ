export interface upcoming {
  dates: Dates;
  page: number;
  results: upcomingResult[];
  total_pages: number;
  total_results: number;
}

export interface upcomingResult {
  results: any;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}
