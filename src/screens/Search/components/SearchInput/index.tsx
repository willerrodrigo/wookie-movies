import React, { useCallback, useState } from 'react';

import * as S from './styles';

type Props = {
  onSearchPress: (searchTerm: string) => void;
};

export const SearchInput: React.FC<Props> = ({ onSearchPress }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchPress = useCallback(() => {
    onSearchPress(searchInputValue);
  }, [onSearchPress, searchInputValue]);

  const handleClearPress = useCallback(() => {
    onSearchPress('');
    setSearchInputValue('');
  }, [onSearchPress]);

  const renderInputRightAccessory = useCallback(
    (props) => {
      return (
        <S.ClearButton {...props} onPress={handleClearPress}>
          <S.ClearIcon />
        </S.ClearButton>
      );
    },
    [handleClearPress]
  );

  return (
    <S.Wrapper>
      <S.Input
        value={searchInputValue}
        onChangeText={setSearchInputValue}
        onSubmitEditing={handleSearchPress}
        RightAccessory={!!searchInputValue && renderInputRightAccessory}
      />

      <S.SearchButton
        onPress={handleSearchPress}
        RightAccessory={() => <S.SearchIcon />}
      />
    </S.Wrapper>
  );
};
