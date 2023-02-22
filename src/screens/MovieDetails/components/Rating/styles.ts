import { Ionicons } from '@expo/vector-icons';

import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const RatingIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 28,
  color: theme.colors.palette.accent400
}))`
  margin-right: ${({ theme }) => theme.spacing.tiny}px;
`;
