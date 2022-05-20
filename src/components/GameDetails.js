import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetGameDetailsQuery,
  useGetGameScreenshotsQuery,
} from '../features/api/apiSlice';

export const GameDetails = () => {
  const { slug } = useParams();

  return (
    <>
      {slug !== undefined && (
        <div className="w-full h-[100vh] bg-black opacity-50 fixed top-0"></div>
      )}
    </>
  );
};
