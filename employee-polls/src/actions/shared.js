import { getInitialData } from "../utils/apis";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleLogIn(userId) {
  return (dispatch) => {
    return dispatch(setAuthedUser(userId));
  };
}

export function handleLogOut() {
  return (dispatch) => {
    return dispatch(setAuthedUser(null));
  };
}
