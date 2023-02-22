import { FlatList } from 'react-native';

import { Text } from 'components';
import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Title = styled(Text).attrs({
  preset: 'bold'
})`
  margin-left: ${({ theme }) => theme.spacing.large}px;
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall}px;
  text-transform: uppercase;
`;

export const MovieList = styled.FlatList.attrs(({ theme }) => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: theme.spacing.large }
}))`` as unknown as typeof FlatList;
