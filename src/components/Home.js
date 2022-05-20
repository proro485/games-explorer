import React from 'react';
import { Outlet } from 'react-router-dom';
import { NewGames } from './NewGames';
import { PopularGames } from './PopularGames';
import { UpcomingGames } from './UpcomingGames';

export const Home = () => {
  return (
    <div className="h-full">
      <Outlet />
      <PopularGames />
      <UpcomingGames />
      <NewGames />
    </div>
  );
};
