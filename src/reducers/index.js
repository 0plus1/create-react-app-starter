import { combineReducers } from 'redux';
import { API_READ_ALL_POSTS } from '../actions';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case API_READ_ALL_POSTS: {
      const { data: posts } = action.payload;
      return posts;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
