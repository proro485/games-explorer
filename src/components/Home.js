import React from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetGamesQuery } from '../features/api/apiSlice';
import { GamesList } from './GamesList';

export const Home = () => {
  return (
    <div className="h-full mt-24">
      <Outlet />
      <Games />
    </div>
  );
};

const Games = () => {
  const { data, isLoading, isError } = useGetGamesQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <div className="h-full flex justify-center items-center">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <div className="h-full flex justify-center items-center">
        <h2 className="text-lg m-5 mt-10">Something went wrong 🤔</h2>
      </div>
    );
  } else {
    content = (
      <>
        <GamesList games={data.results} />
      </>
    );
  }

  return content;
};
