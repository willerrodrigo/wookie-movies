import React from 'react';
import { useMemo } from 'react';

import * as S from './styles';

type RatingProps = {
  rating: number;
};

const MAX_RATING = [1, 2, 3, 4, 5];

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const ratingMap = useMemo(() => {
    const ratingsArray = [];
    const fullStars = Math.floor(rating / 2);
    const halfStar = (rating / 2) % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      ratingsArray.push('star');
    }

    if (halfStar) {
      ratingsArray.push('star-half');
    }

    return ratingsArray;
  }, [rating]);

  return (
    <S.Wrapper>
      {MAX_RATING.map((rating, index) => {
        return (
          <S.RatingIcon
            key={rating}
            name={ratingMap[index] ?? 'star-outline'}
          />
        );
      })}
    </S.Wrapper>
  );
};
