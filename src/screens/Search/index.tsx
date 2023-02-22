import React, { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';

import { If, Loader, MovieItem } from 'components';
import { useSearchQuery } from 'queries';
import { Movie } from 'services';

import { SearchInput } from './components';
import * as S from './styles';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading } = useSearchQuery(searchTerm);

  const renderMovieItem = useCallback(({ item }: { item: Movie }) => {
    return <MovieItem item={item} />;
  }, []);

  const handleSearchSubmit = useCallback((searchText: string) => {
    setSearchTerm(searchText);
    Keyboard.dismiss();
  }, []);

  return (
    <S.Wrapper>
      <SearchInput onSearchPress={handleSearchSubmit} />

      <If condition={isLoading}>
        <Loader />
      </If>

      <If condition={!isLoading}>
        <S.MovieList
          data={data || []}
          keyExtractor={(item) => item.id}
          renderItem={renderMovieItem}
        />
      </If>
    </S.Wrapper>
  );
};
