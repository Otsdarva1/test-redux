import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "PLUS", payload: { num: 9 } });
store.dispatch({ type: "MINUS", payload: { num: 4 } });
