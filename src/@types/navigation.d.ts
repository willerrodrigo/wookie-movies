import { Movie } from 'services';
import { Routes } from 'utils';

export type MovieDetailsParams = {
  movie: Movie;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [Routes.HOME]: undefined;
      [Routes.SEARCH]: undefined;
      [Routes.MOVIE_DETAILS]: MovieDetailsParams;
    }
  }
}
