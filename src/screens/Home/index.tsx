import React, { useCallback, useMemo } from 'react';
import { RefetchOptions } from 'react-query';

import { Loader, Error } from 'components';
import { useMoviesQuery } from 'queries';
import type { Category as CategoryType } from 'services';
import { parseMoviesByGenre } from 'utils/dto';

import { Category } from './components';
import * as S from './styles';

export const Home: React.FC = () => {
  const { data, isRefetching, isError, refetch } = useMoviesQuery();
  const parsedMovies = useMemo(() => parseMoviesByGenre(data || []), [data]);

  const onTryAgain = useCallback(
    (options?: RefetchOptions) => {
      refetch(options);
    },
    [refetch]
  );

  const renderSectionHeader = useCallback(
    ({ section }: { section: CategoryType }) => {
      return <Category category={section} />;
    },
    []
  );

  if (isRefetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error onTryAgain={onTryAgain} />;
  }

  return (
    <S.Wrapper>
      <S.CategoryList
        sections={parsedMovies}
        renderSectionHeader={renderSectionHeader}
        renderItem={() => null}
        ListHeaderComponent={<S.Title>{`WOOKIE\nMOVIES`}</S.Title>}
        SectionSeparatorComponent={() => <S.SectionSeparator />}
      />
    </S.Wrapper>
  );
};
