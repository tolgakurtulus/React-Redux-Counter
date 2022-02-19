import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

export const UserList = () => {
  const [val, setVal] = useState("");
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state);
  console.log("~ users", users)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(Actions.user.getUser());
    dispatch(Actions.user.setUser());
  }, [dispatch])
  


  return (
    <div>
      <ul>
        {user &&
          user.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};
