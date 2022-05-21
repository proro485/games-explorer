import React from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetPopularGamesQuery } from '../features/api/apiSlice';
import { GamesList } from './GamesList';
import { Title } from './Title';

export const PopularGames = () => {
  const { data, isLoading, isError } = useGetPopularGamesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <Title name={'Popular Games'} />
        <div className="flex justify-center my-10">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <Title name={'Popular Games'} />
        <h2 className="text-lg m-5 mt-10">Something went wrong 🤔</h2>
      </>
    );
  } else {
    content = (
      <>
        <Title name={'Popular Games'} />
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
