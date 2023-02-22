/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useQuery } from 'react-query';

import { AxiosError } from 'axios';
import { Movie, MoviesApi } from 'services';

const fetchAllMovies = async () => {
  return await MoviesApi.fetchAllMovies();
};

export const useMoviesQuery = () => {
  return useQuery<Movie[], AxiosError>(['movies'], fetchAllMovies);
};
