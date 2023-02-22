import React, { useCallback } from 'react';
import { RefetchOptions } from 'react-query';

import * as S from './styles';

type Props = {
  onTryAgain: (options?: RefetchOptions) => void;
};

export const Error: React.FC<Props> = ({ onTryAgain }) => {
  const handleTryAgain = useCallback(() => {
    onTryAgain();
  }, [onTryAgain]);

  return (
    <S.Wrapper>
      <S.Label>Aaaah! Something went wrong.</S.Label>
      <S.RetryButton text="Try Again" onPress={handleTryAgain} />
    </S.Wrapper>
  );
};
