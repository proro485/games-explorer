import React from 'react';
import { useGetUpcomingGamesQuery } from '../features/api/apiSlice';
import { GamesPage } from './GamesPage';

export const UpcomingGames = () => {
  const { data, isLoading, isError } = useGetUpcomingGamesQuery();

  return (
    <GamesPage
      name={'Upcoming Games'}
      data={data}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
