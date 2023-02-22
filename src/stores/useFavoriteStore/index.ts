import AsyncStorage from '@react-native-async-storage/async-storage';

import { Movie } from 'services';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  favorites: Movie[];
  favoriteMovie: (movie: Movie) => void;
};

export const useFavoriteStore = create<State>()(
  persist(
    (set, get) => ({
      favorites: [],
      favoriteMovie: (movie: Movie) => {
        const favorites = get().favorites;
        const isAlreadyFavorited = favorites.some(
          (favorite) => favorite.id === movie.id
        );

        set({
          favorites: isAlreadyFavorited
            ? favorites.filter((favorite) => favorite.id !== movie.id)
            : [...favorites, movie]
        });
      }
    }),
    {
      name: 'favorite-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
