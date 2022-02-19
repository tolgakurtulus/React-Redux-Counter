import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("~ state", state);
  }, [count]);

  return (
    <div>
      <button onClick={() => dispatch(Actions.count.increaseAsyncCount(50))}>
        INCREAS
      </button>
      <button onClick={() => dispatch(Actions.count.decreaseAsyncCount(40))}>
        DECREAS
      </button>
      <p>{count}</p>
    </div>
  );
};
