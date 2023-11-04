const AnsweredPoll = ({ question, answer, numberOfUsers }) => {
  return (
    <div>
      <h2 className="center">You have answered this question already!</h2>
      <div
        className={
          answer === "optionOne"
            ? "selected_option_box"
            : "nonselected_option_box"
        }
      >
        <p>{question.optionOne["text"]}</p>
        <p>
          {question.optionOne.votes.length} people ~{" "}
          {(question.optionOne.votes.length / numberOfUsers) * 100}% voted for
          this option.
        </p>
      </div>
      <div
        className={
          answer === "optionTwo"
            ? "selected_option_box"
            : "nonselected_option_box"
        }
      >
        <p>{question.optionTwo["text"]}</p>
        <p>
          {question.optionTwo.votes.length} people ~{" "}
          {(question.optionTwo.votes.length / numberOfUsers) * 100}% voted for
          this option.
        </p>
      </div>
    </div>
  );
};

export default AnsweredPoll;
