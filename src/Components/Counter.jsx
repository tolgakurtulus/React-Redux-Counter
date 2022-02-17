import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(Actions.count.increaseCount(50))}>INCREAS</button>
      <button onClick={() => dispatch(Actions.count.decreaseCount(40))}>DECREAS</button>
      <p>{count}</p>
    </div>
  );
};
