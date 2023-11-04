import { connect } from "react-redux";
import GridQuestions from "./GridQuestions";

const Dashboard = (props) => {
  return (
    <div>
      <GridQuestions questions={props.newQuestions} title={"New Question"} />
      <GridQuestions questions={props.answeredQuestions} title={"Done"} />
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const newQuestions = [];
  const answeredQuestions = [];

  const listAnswer = users[authedUser].answers;
  Object.keys(questions).forEach((qid) => {
    if (qid in listAnswer) {
      answeredQuestions.push(questions[qid]);
    } else {
      newQuestions.push(questions[qid]);
    }
  });

  return {
    newQuestions: newQuestions,
    answeredQuestions: answeredQuestions,
  };
};

export default connect(mapStateToProps)(Dashboard);
