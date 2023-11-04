export const RECEIVE_USERS = "RECEIVE_USERS";
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";
export function updateUserAnswer({ qid, authedUser, answer }) {
  return {
    type: UPDATE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export const UPDATE_USER_QUESTION = "UPDATE_USER_QUESTION";
export function updateUserQuestion(question) {
  return {
    type: UPDATE_USER_QUESTION,
    authedUser: question.author,
    qid: question.id,
  };
}
