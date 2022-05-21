import React from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetUpcomingGamesQuery } from '../features/api/apiSlice';
import { GamesList } from './GamesList';
import { Title } from './Title';

export const UpcomingGames = () => {
  const { data, isLoading, isError } = useGetUpcomingGamesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <Title name={'Upcoming Games'} />
        <div className="flex justify-center my-10">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <Title name={'Upcoming Games'} />
        <h2 className="text-lg m-5">Something went wrong 🤔</h2>
      </>
    );
  } else {
    content = (
      <>
        <Title name={'Upcoming Games'} />
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
