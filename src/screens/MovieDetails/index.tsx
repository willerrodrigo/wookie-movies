import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

import { useFavoriteStore } from 'stores';
import { MovieDetailsParams } from 'types/navigation';

import { Rating } from './components';
import * as S from './styles';

export const MovieDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as MovieDetailsParams;
  const {
    id,
    backdrop,
    poster,
    title,
    imdb_rating,
    released_on,
    length,
    director,
    cast,
    overview,
    classification
  } = params.movie;
  const { favoriteMovie, favorites } = useFavoriteStore();
  const directors = Array.isArray(director) ? director.join(', ') : director;

  const handleBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleFavoriteMovie = useCallback(() => {
    favoriteMovie(params.movie);
  }, [favoriteMovie, params.movie]);

  const isAlreadyFavorited = useMemo(() => {
    return favorites.some((favorite) => favorite.id === id);
  }, [favorites, id]);

  return (
    <S.Wrapper>
      <S.BackdropImg source={{ uri: backdrop }}>
        <S.Overlay />

        <S.Header>
          <S.BackButton onPress={handleBackNavigation}>
            <S.BackButtonIcon />
          </S.BackButton>

          <S.FavoriteButton onPress={handleFavoriteMovie}>
            <S.FavoriteIcon isAlreadyFavorited={isAlreadyFavorited} />
          </S.FavoriteButton>
        </S.Header>
      </S.BackdropImg>

      <S.Content>
        <S.SubHeader>
          <S.Poster source={{ uri: poster }} />

          <S.RatingWrapper>
            <S.Title>
              {title} <S.ImdbRating>({imdb_rating})</S.ImdbRating>
            </S.Title>

            <Rating rating={imdb_rating} />
          </S.RatingWrapper>
        </S.SubHeader>

        <S.Metadata>
          {`${new Date(
            released_on
          ).getFullYear()}  |  ${length}  |  ${classification}  |  ${directors}`}
        </S.Metadata>

        <S.Metadata>Cast: {cast.join(', ')}</S.Metadata>

        <S.Metadata>Movie Description: {overview}</S.Metadata>
      </S.Content>
    </S.Wrapper>
  );
};
