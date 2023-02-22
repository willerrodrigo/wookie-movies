import { api } from '../api';
import { Movie } from './types';

export default class MoviesApi {
  static fetchAllMovies = async (): Promise<Movie[]> => {
    try {
      const { data } = await api.get('/movies');

      return data.movies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static searchMovies = async (searchTerm: string): Promise<Movie[]> => {
    try {
      const { data } = await api.get(`/movies?q=${searchTerm}`);

      return data.movies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
