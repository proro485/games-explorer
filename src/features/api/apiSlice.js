import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.rawg.io/api/';
const apiKey = process.env.REACT_APP_RAWG_API_KEY;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const games = `/games?page_size=20&key=${apiKey}`;
const popularGames = `/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12&key=${apiKey}`;
const upcomingGames = `/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12&key=${apiKey}`;
const newGames = `/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12&key=${apiKey}`;

const gameDetails = (slug) => `/games/${slug}?key=${apiKey}`;

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => games,
    }),
    getPopularGames: builder.query({
      query: () => popularGames,
    }),
    getUpcomingGames: builder.query({
      query: () => upcomingGames,
    }),
    getNewGames: builder.query({
      query: () => newGames,
    }),
    getGameDetails: builder.query({
      query: (slug) => gameDetails(slug),
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetPopularGamesQuery,
  useGetUpcomingGamesQuery,
  useGetNewGamesQuery,
  useGetGameDetailsQuery,
} = apiSlice;
