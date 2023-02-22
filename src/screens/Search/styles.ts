import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right']
})`
  flex: 1;
  margin: ${({ theme }) =>
    `${theme.spacing.medium}px ${theme.spacing.large}px 0`};
`;

export const MovieList = styled.FlatList.attrs(({ theme }) => ({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: theme.spacing.medium },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginTop: theme.spacing.medium
  }
}))`
  margin-top: ${({ theme }) => theme.spacing.tiny}px;
` as unknown as typeof FlatList;
