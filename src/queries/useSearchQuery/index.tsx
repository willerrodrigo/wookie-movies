/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useQuery } from 'react-query';

import { AxiosError } from 'axios';
import { Movie, MoviesApi } from 'services';

const searchMovies = async (searchTerm: string) => {
  return await MoviesApi.searchMovies(searchTerm);
};

export const useSearchQuery = (searchTerm: string) => {
  return useQuery<Movie[], AxiosError>(
    ['movies', searchTerm],
    () => searchMovies(searchTerm),
    {
      enabled: Boolean(searchTerm)
    }
  );
};
