
export interface movieResponse {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
}

export interface movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

export interface hero {
  image?:string;
  thumbImage?:string;
  title?:string;
}
export interface movieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

export interface Productioncompany {
  id: number;
  logo_path?: any;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Belongstocollection {
  id: number;
  name: string;
  poster_path?: any;
  backdrop_path?: any;
}
