import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameDetails } from './components/GameDetails';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { PopularGames } from './components/PopularGames';
import { UpcomingGames } from './components/UpcomingGames';
import { NewGames } from './components/NewGames';

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-full w-full font-fira">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":slug" element={<GameDetails />} />
          </Route>
          <Route
            path="/popular-games"
            element={
              <div className="mt-24">
                <PopularGames />
              </div>
            }
          >
            <Route path=":slug" element={<GameDetails />} />
          </Route>
          <Route
            path="/upcoming-games"
            element={
              <div className="mt-24">
                <UpcomingGames />
              </div>
            }
          >
            <Route path=":slug" element={<GameDetails />} />
          </Route>
          <Route
            path="/new-games"
            element={
              <div className="mt-24">
                <NewGames />
              </div>
            }
          >
            <Route path=":slug" element={<GameDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
