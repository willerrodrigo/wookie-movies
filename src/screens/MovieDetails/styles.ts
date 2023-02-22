import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import { AutoImage, Text } from 'components';
import styled, { css } from 'styled-components/native';

type FavoriteIconProps = {
  isAlreadyFavorited: boolean;
};

const windowWidth = Dimensions.get('window').width;

export const Wrapper = styled.ScrollView``;

export const BackdropImg = styled(AutoImage).attrs({
  maxWidth: windowWidth
})``;

export const Overlay = styled.View`
  ${StyleSheet.absoluteFill};
  background-color: ${({ theme }) => theme.colors.palette.overlay20};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    margin: ${initialWindowMetrics.insets.top + theme.spacing.extraSmall}px
      ${theme.spacing.large}px;
  `}
`;

export const BackButton = styled.TouchableOpacity``;

export const BackButtonIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: 'arrow-back',
  color: theme.colors.palette.neutral100,
  size: 32
}))``;

export const FavoriteButton = styled.TouchableOpacity``;

export const FavoriteIcon = styled(Ionicons).attrs<FavoriteIconProps>(
  ({ theme, isAlreadyFavorited }) => ({
    name: isAlreadyFavorited ? 'heart' : 'heart-outline',
    color: isAlreadyFavorited
      ? theme.colors.palette.angry500
      : theme.colors.palette.neutral100,
    size: 32
  })
)``;

export const Poster = styled(AutoImage).attrs({
  maxHeight: 150
})``;

export const Content = styled.View`
  ${({ theme }) => css`
    bottom: ${theme.spacing.massive}px;
    margin: 0 ${theme.spacing.large}px;
  `}
`;

export const SubHeader = styled.View`
  flex-direction: row;
`;

export const RatingWrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-between;
    margin-top: ${theme.spacing.medium}px;
    margin-left: ${theme.spacing.extraSmall}px;
  `}
`;

export const Title = styled(Text).attrs({
  preset: 'subheading'
})`
  ${({ theme }) => css`
    color: ${theme.colors.palette.neutral100};
  `}
`;

export const ImdbRating = styled(Text).attrs({
  preset: 'subheading'
})`
  color: ${({ theme }) => theme.colors.palette.accent400};
`;

export const Metadata = styled(Text)`
  text-align: justify;
  margin-top: ${({ theme }) => theme.spacing.medium}px;
`;
