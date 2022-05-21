import React from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetNewGamesQuery } from '../features/api/apiSlice';
import { GamesList } from './GamesList';
import { Title } from './Title';

export const NewGames = () => {
  const { data, isLoading, isError } = useGetNewGamesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <Title name={'New Games'} />
        <div className="flex justify-center items-center">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <Title name={'New Games'} />
        <h2 className="text-lg m-5 mt-10">Something went wrong 🤔</h2>
      </>
    );
  } else {
    content = (
      <>
        <Title name={'New Games'} />
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
