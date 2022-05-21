import React from 'react';

export const Title = ({ name }) => {
  return (
    <h1 className="text-3xl sm:text-4xl font-bold m-5 mt-28 sm:mt-10">
      {name}
    </h1>
  );
};
