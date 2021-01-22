import { createStore } from "redux";

function MyReducer(state = { counter: 10 }, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}

const store = createStore(MyReducer);
export default store;
