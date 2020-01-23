import { postsAPI } from '../modules/api';

export const API_READ_ALL_POSTS = 'API_READ_ALL_POSTS';

export function apiReadAllPosts() {
  const request = postsAPI.readAll();

  return {
    type: API_READ_ALL_POSTS,
    payload: request,
  };
}
