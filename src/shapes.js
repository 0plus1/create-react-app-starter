import {
  shape,
  string,
  number,
} from 'prop-types';

export const postShape = shape({
  userId: number.isRequired,
  id: number.isRequired,
  title: string.isRequired,
  body: string.isRequired,
});

export const anotherShape = shape({});
