import React from 'react';
import { GameCard } from './GameCard';

export const GamesList = ({ games }) => {
  return (
    <div className="grid sm:grid-cols-auto-fit grid-cols-auto-fit-sm">
      {games.map((game) => {
        return (
          <div key={game.id}>
            <GameCard
              name={game.name}
              img={game.background_image}
              release_date={game.released}
              id={game.id}
              slug={game.slug}
            />
          </div>
        );
      })}
    </div>
  );
};
