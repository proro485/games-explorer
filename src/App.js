import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameDetails } from './components/GameDetails';
import { Home } from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-full w-full font-fira">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":slug" element={<GameDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
