import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useGetGameDetailsQuery } from '../features/api/apiSlice';

export const GameDetails = () => {
  const { slug } = useParams();
  const location = useLocation().pathname.split('/');
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const { data, isLoading, isError } = useGetGameDetailsQuery(slug);

  let content;

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        if (location.length === 3) {
          navigate(`/${location[1]}`);
        } else if (location.length === 2) {
          navigate(`/${location[0]}`);
        }
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
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  } else {
    content = <Description data={data} />;
  }

  return (
    <div className="w-full min-h-[100vh] flex justify-center bg-black bg-opacity-50 fixed top-0 z-10">
      <div
        className="absolute bg-white sm:rounded-lg w-full sm:w-4/5 max-w-5xl min-h-full max-h-full px-6 sm:px-20 py-10 overflow-y-auto"
        ref={contentRef}
      >
        {content}
      </div>
    </div>
  );
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

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] overflow-hidden">
      <PuffLoader size={60} color="#a0be92" />
      <CloseButton />
    </div>
  );
};

const Error = () => {
  return (
    <>
      <h2 className="text-center text-lg m-5 mt-10">Something went wrong 🤔</h2>
      <CloseButton />
    </>
  );
};

const Description = ({ data }) => {
  return (
    <>
      <div className="text-2xl sm:text-4xl font-bold w-[90%]">{data.name}</div>
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
      />{' '}
    </>
  );
};
