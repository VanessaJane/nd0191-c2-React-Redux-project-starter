import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { updateUserAnswer } from "../actions/users";

const Poll = (props) => {
  const selectOption = (e) => {
    const answer = e.target.value;
    const qid = props.question.id;

    props.dispatch(
      handleAnswerQuestion({
        authedUser: props.authedUser,
        qid: qid,
        answer: answer,
      })
    );
    props.dispatch(
      updateUserAnswer({
        authedUser: props.authedUser,
        qid: qid,
        answer: answer,
      })
    );
  };

  return (
    <div>
      <h2 className="center">Would You Rather?</h2>
      <div className="option_box">
        <p>{props.question.optionOne["text"]}</p>
        <button
          type="submit"
          value="optionOne"
          onClick={selectOption}
          className="option_btn"
        >
          Click
        </button>
      </div>
      <div className="option_box">
        <p>{props.question.optionTwo["text"]}</p>
        <button
          type="submit"
          value="optionTwo"
          onClick={selectOption}
          className="option_btn"
        >
          Click
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }, { question }) => {
  return {
    authedUser,
    users,
    question,
  };
};

export default connect(mapStateToProps)(Poll);
