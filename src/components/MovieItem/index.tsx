import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Movie } from 'services';
import { Routes } from 'utils';

import * as S from './styles';

type Props = {
  item: Movie;
};

export const MovieItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation();

  const handleMovieNavigation = useCallback(() => {
    navigation.navigate(Routes.MOVIE_DETAILS, { movie: item });
  }, [item, navigation]);

  return (
    <S.MovieWrapper onPress={handleMovieNavigation}>
      <S.Poster source={{ uri: item.poster }} />
    </S.MovieWrapper>
  );
};
