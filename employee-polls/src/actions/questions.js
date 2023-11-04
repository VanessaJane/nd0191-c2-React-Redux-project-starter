import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/apis";
import { updateUserAnswer, updateUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: firstOption,
      optionTwoText: secondOption,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(updateUserQuestion(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

function answerQuestion({ qid, authedUser, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(answerQuestion(info));
        dispatch(updateUserAnswer(info));
      })
      .then(() => dispatch(hideLoading()));
  };
}
