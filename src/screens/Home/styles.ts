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

export const CategoryList = styled.SectionList.attrs({
  showsVerticalScrollIndicator: false,
  ListHeaderComponentStyle: { marginBottom: 8, paddingTop: 16 }
})``;

export const SectionSeparator = styled.View`
  margin-top: ${({ theme }) => theme.spacing.extraSmall}px;
`;
