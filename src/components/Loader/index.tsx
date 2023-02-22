import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { colors } from 'theme';

import * as S from './styles';

export const Loader = ({
  color = colors.text,
  size = 36,
  ...rest
}: ActivityIndicatorProps) => {
  return (
    <S.Wrapper>
      <ActivityIndicator
        accessibilityHint="loading"
        color={color}
        size={size}
        {...rest}
      />
    </S.Wrapper>
  );
};
