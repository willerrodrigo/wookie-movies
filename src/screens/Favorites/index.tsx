import React, { useCallback } from 'react';

import { MovieItem } from 'components';
import { Movie } from 'services';
import { useFavoriteStore } from 'stores';

import * as S from './styles';

export const Favorites: React.FC = () => {
  const { favorites } = useFavoriteStore();

  const renderMovieItem = useCallback(({ item }: { item: Movie }) => {
    return <MovieItem item={item} />;
  }, []);

  return (
    <S.Wrapper>
      <S.MovieList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieItem}
        ListHeaderComponent={<S.Title>{`MY\nFAVORITES`}</S.Title>}
      />
    </S.Wrapper>
  );
};
