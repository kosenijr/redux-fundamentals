/**
 * =========================================================
 * Action Types
 * =========================================================
 */
const SET_PROGRESS = 'SET_PROGRESS';
const SET_STEP = 'SET_STEP';
const SET_FIRST_NAME = 'SET_FIRST_NAME';
const SET_LAST_NAME = 'SET_LAST_NAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_ABOUT = 'SET_ABOUT';
const SET_EMAIL_NOTIFICATIONS = 'SET_EMAIL_NOTIFICATIONS';
const SET_EMAIL_PROMOTIONS = 'SET_EMAIL_PROMOTIONS';

/**
 * =========================================================
 * Action Creator Functions
 * =========================================================
 */
export const setProgress = (progress) => {
  return {
    type: SET_PROGRESS,
    payload: progress
  }
}

/**
 * =========================================================
 * Reducer
 * =========================================================
 */

const initialState = {
  progress: 25
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      }
    default:
      return {
        ...state
      }
  }
};
