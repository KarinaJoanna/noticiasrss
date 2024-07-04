//Reducers.js

import { SET_NEWS } from './actions';

const initialState = {
  news: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, news: action.payload };
    default:
      return state;
  }
}