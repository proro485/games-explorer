import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center fixed top-0 p-3 sm:p-5 bg-white border-b-2 border-accent">
      <Link to="/">
        <div className="text-2xl font-bold mb-4 sm:mb-0">Game Explorer</div>
      </Link>
      <NavbarLinks />
    </div>
  );
};

const NavbarLinks = () => {
  return (
    <div className="flex justify-evenly sm:justify-end sm:space-x-8 w-full sm:w-fit">
      <NavbarLink path="popular-games" text="Popular" />
      <NavbarLink path="upcoming-games" text="Upcoming" />
      <NavbarLink path="new-games" text="New" />
    </div>
  );
};

const NavbarLink = ({ path, text }) => {
  const location = useLocation().pathname.split('/')[1];

  return (
    <Link to={`/${path}`}>
      <div
        className={`font-bold ${
          location === path ? 'text-green-900' : 'text-gray-500 '
        } hover:text-green-900`}
      >
        {text}
      </div>
    </Link>
  );
};
