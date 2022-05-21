import React from 'react';
import { useGetNewGamesQuery } from '../features/api/apiSlice';
import { GamesPage } from './GamesPage';

export const NewGames = () => {
  const { data, isLoading, isError } = useGetNewGamesQuery();

  return (
    <GamesPage
      name={'New Games'}
      data={data}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
