import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isSignIn: null,
  userId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        userId: action.payload
      };

    case actionTypes.SIGN_OUT:
      return {
        ...state,
        isSignIn: false,
        userId: null
      };

    default:
      return state;
  }
};

export default authReducer;
