import { createStore } from "redux";

const initialState = {
  count: 100,
};

export function MyReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      state = { ...state, count: state.count + 1 };

      return state;
    case "DEC":
      state = { ...state, count: state.count - 1 };
      return state;
    default:
      return state;
  }
}

const store = createStore(MyReducer);
export default store;
