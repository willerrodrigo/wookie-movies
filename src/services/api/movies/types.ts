export type Movie = {
  id: string;
  poster: string;
  genres: string[];
  backdrop: string;
  title: string;
  imdb_rating: number;
  released_on: string;
  length: string;
  cast: string[];
  director: string | string[];
  overview: string;
  classification: string;
};

export type Category = {
  title: string;
  data: Movie[];
};
