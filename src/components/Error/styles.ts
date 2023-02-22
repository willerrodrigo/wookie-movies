import { Button } from 'components/Button';
import { Text } from 'components/Text';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text).attrs({
  preset: 'subheading'
})`
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall}px;
`;

export const RetryButton = styled(Button).attrs(({ theme }) => ({
  preset: 'reversed'
}))``;
