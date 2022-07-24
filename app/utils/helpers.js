import { POST_COVER_IMAGE } from './constants';

export const generateRandomTimeStamp = () => {
  const startDate = new Date(2012, 0, 1);
  const endDate = new Date();
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  );
};

export const randomImageUri = () => {
  const path =
    POST_COVER_IMAGE[Math.floor(Math.random() * POST_COVER_IMAGE.length)];
  return path;
};
