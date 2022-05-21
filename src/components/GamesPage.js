import React from 'react';
import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { GamesList } from './GamesList';
import { Title } from './Title';

export const GamesPage = ({ name, data, isLoading, isError }) => {
  let content;

  if (isLoading) {
    content = (
      <>
        <div className="flex justify-center my-10">
          <PuffLoader size={60} />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <h2 className="text-lg m-5">Something went wrong 🤔</h2>
      </>
    );
  } else {
    content = (
      <>
        <GamesList games={data.results} />
      </>
    );
  }

  return (
    <>
      <Title name={name} />
      {content}
      <Outlet />
    </>
  );
};
