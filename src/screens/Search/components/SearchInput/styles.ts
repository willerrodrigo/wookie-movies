import { Ionicons } from '@expo/vector-icons';

import { Button, TextField } from 'components';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  height: 48px;
`;

export const Input = styled(TextField).attrs(({ theme }) => ({
  placeholder: 'search term',
  textAlignVertical: 'center',
  containerStyle: {
    flex: 1,
    marginRight: theme.spacing.extraSmall
  },
  inputWrapperStyle: {
    height: '100%',
    alignItems: 'center'
  }
}))`
  flex: 1;
  height: 100%;
  margin: 0 ${({ theme }) => theme.spacing.small}px;
`;

export const ClearButton = styled.TouchableOpacity``;

export const ClearIcon = styled(Ionicons).attrs(() => ({
  name: 'close',
  size: 24
}))``;

export const SearchButton = styled(Button).attrs({
  preset: 'reversed'
})``;

export const SearchIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: 'search',
  color: theme.colors.palette.neutral100,
  size: 24
}))``;
