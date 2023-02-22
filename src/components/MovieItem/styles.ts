import styled from 'styled-components/native';

import { AutoImage } from '../AutoImage';

export const MovieWrapper = styled.TouchableOpacity`
  margin-right: ${({ theme }) => theme.spacing.extraSmall}px;
`;

export const Poster = styled(AutoImage).attrs({
  maxWidth: 160
})``;
