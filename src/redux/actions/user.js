import ActionTypes from "../types/index";

const setUser = (user) => {
  return { type: ActionTypes.user.SET_USER, payload: user };
};

const getUser = () => {
  return { type: ActionTypes.user.GET_USER };
};

const user = {
  setUser,
  getUser,
};

export default user;
