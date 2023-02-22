import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'components';
import styled from 'styled-components/native';

export const Wrapper = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right']
})`
  flex: 1;
`;

export const Title = styled(Text).attrs({
  preset: 'heading'
})`
  text-align: center;
`;

export const MovieList = styled.FlatList.attrs(({ theme }) => ({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginTop: theme.spacing.medium
  }
}))`` as unknown as typeof FlatList;
