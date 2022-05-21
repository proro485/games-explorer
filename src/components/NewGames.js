import React from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetNewGamesQuery } from '../features/api/apiSlice';
import { GamesList } from './GamesList';

export const NewGames = () => {
  const { data, isLoading, isError } = useGetNewGamesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <h1 className="text-3xl sm:text-4xl font-bold m-5 mt-28 sm:mt-10">
          New Games
        </h1>
        <div className="flex justify-center items-center">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h1 className="text-3xl sm:text-4xl font-bold m-5 mt-28 sm:mt-10">
          New Games
        </h1>
        <h2 className="text-lg m-5 mt-10">Something went wrong 🤔</h2>
      </>
    );
  } else {
    content = (
      <>
        <h1 className="text-3xl sm:text-4xl font-bold m-5 mt-28 sm:mt-10">
          New Games
        </h1>
        <GamesList games={data.results} />
      </>
    );
  }

  return (
    <>
      {content}
      <Outlet />
    </>
  );
};
