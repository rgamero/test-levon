// ActionTypes
export const ADD_ITEMS = 'ADD_ITEMS';
export const REMOVE_ITEMS = 'REMOVE_ITEMS';

// Action
export function addItem() {
  return { type: ADD_ITEMS };
}

export function removeItem() {
  return { type: REMOVE_ITEMS };
}

// InitialState
const initialState = {
  count: 0,
  items: [],
};

// Reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        count: state.count + 1,
        items: [...state.items, state.count],
      };
    case REMOVE_ITEMS:
      return {
        ...state,
        count: state.count - 1,
        items: [...state.items.slice(0, state.count - 1)],
      };
    default:
      return state;
  }
};

export const increment = () => {
  return dispatch => {
    dispatch({
      type: ADD_ITEMS,
    });
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEMS,
    });
  };
};
