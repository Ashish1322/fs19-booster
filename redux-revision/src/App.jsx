import { useSelector, useDispatch } from "react-redux";

import { increaseCounter, decreaseCounter } from "./redux/slices/counterSlice";
function App() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button
        onClick={() =>
          dispatch(
            increaseCounter({
              value: 5,
            })
          )
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          dispatch(
            decreaseCounter({
              value: 1,
            })
          )
        }
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
