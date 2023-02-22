import React from 'react';
import { useCallback } from 'react';

import { MovieItem } from 'components';
import type { Category as CategoryType, Movie } from 'services';

import * as S from './styles';

type CategoryProps = {
  category: CategoryType;
};

export const Category: React.FC<CategoryProps> = ({ category }) => {
  const { title, data } = category;

  const renderMovieItem = useCallback(({ item }: { item: Movie }) => {
    return <MovieItem item={item} />;
  }, []);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.MovieList
        data={data}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
      />
    </S.Wrapper>
  );
};
