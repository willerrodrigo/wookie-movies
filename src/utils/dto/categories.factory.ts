import { Category, Movie } from 'services';

export const parseMoviesByGenre = (movies: Movie[]) => {
  const categories = movies.reduce((prevCategories, movie) => {
    movie.genres.forEach((genre) => {
      if (!prevCategories[genre]) {
        prevCategories[genre] = { title: genre, data: [] };
      }

      prevCategories[genre].data.push(movie);
    });

    return prevCategories;
  }, {} as Record<string, Category>);

  return Object.values(categories);
};
