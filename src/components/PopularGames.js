import React from 'react';
import { useGetPopularGamesQuery } from '../features/api/apiSlice';
import { GamesPage } from './GamesPage';

export const PopularGames = () => {
  const { data, isLoading, isError } = useGetPopularGamesQuery();

  return (
    <GamesPage
      name={'Popular Games'}
      data={data}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
