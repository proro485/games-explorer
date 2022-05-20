import React from 'react';
import { PuffLoader } from 'react-spinners';
import { useGetUpcomingGamesQuery } from '../features/api/apiSlice';
import { GamesList } from './GamesList';

export const UpcomingGames = () => {
  const { data, isLoading, isError } = useGetUpcomingGamesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <h1 className="text-4xl font-bold m-5 mt-10">Upcoming Games</h1>
        <div className="flex justify-center my-10">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h1 className="text-4xl font-bold m-5 mt-10">Upcoming Games</h1>
        <h2 className="text-lg m-5">Something went wrong 🤔</h2>
      </>
    );
  } else {
    content = (
      <>
        <h1 className="text-4xl font-bold m-5 mt-10">Upcoming Games</h1>
        <GamesList games={data.results} />
      </>
    );
  }

  return content;
};
