import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetGameDetailsQuery } from '../features/api/apiSlice';

export const GameDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const { data, isLoading, isError } = useGetGameDetailsQuery(slug);

  let content;

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        console.log(event.target);
        navigate('/');
      }
    });
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (slug === undefined) {
    content = <></>;
  } else if (isLoading) {
    content = (
      <>
        <div className="w-full flex justify-center min-h-[100vh] bg-black bg-opacity-50 fixed top-0 z-10">
          <div
            className="absolute flex justify-center items-center bg-white sm:rounded-lg w-full sm:w-4/5 max-w-5xl min-h-full px-6 sm:px-20 py-10"
            ref={contentRef}
          >
            <PuffLoader size={60} />
            <CloseButton />
          </div>
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <>
        <div className="w-full min-h-[100vh] flex justify-center bg-black bg-opacity-50 fixed top-0 z-10">
          <div
            className="absolute bg-white sm:rounded-lg w-full sm:w-4/5 max-w-5xl min-h-full px-6 sm:px-20 py-10"
            ref={contentRef}
          >
            <h2 className="text-center text-lg m-5 mt-10">
              Something went wrong 🤔
            </h2>
            <CloseButton />
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <div className="w-full min-h-[100vh] flex justify-center bg-black bg-opacity-50 fixed top-0 z-10">
        <div
          className="absolute bg-white sm:rounded-lg w-full sm:w-4/5 max-w-5xl max-h-full px-6 sm:px-20 py-10 overflow-y-auto"
          ref={contentRef}
        >
          <div className="text-2xl sm:text-4xl font-bold w-[90%]">
            {data.name}
          </div>
          <CloseButton />
          <div className="text-base sm:text-lg font-bold text-gray-500 mt-2 mb-5">
            Rating: {data.rating}
          </div>
          <img
            src={data.background_image}
            alt={data.name}
            className="rounded-md my-5 w-full bg-no-repeat bg-cover"
          />
          <div className="text-sm sm:text-base">{data.description_raw}</div>
          <img
            src={data.background_image_additional}
            alt={data.name}
            className="rounded-md mt-5"
          />
        </div>
      </div>
    );
  }

  return content;
};

const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="absolute top-10 right-6 sm:right-20 font-bold text-3xl text-gray-500 hover:text-black cursor-pointer"
      onClick={() => navigate(-1)}
    >
      &#10005;
    </div>
  );
};
