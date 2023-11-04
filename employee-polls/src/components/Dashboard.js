import { connect } from "react-redux";
import GridQuestions from "./GridQuestions";
import { Tab, Tabs } from "react-bootstrap";

const Dashboard = (props) => {
  return (
    <Tabs
      defaultActiveKey="unanswered"
      id="justify-tab-example"
      className="mb-4"
      variant="underline"
      justify
    >
      <Tab eventKey="unanswered" title="Unanswered">
        <GridQuestions questions={props.newQuestions} title={"New Question"} />
      </Tab>
      <Tab eventKey="answered" title="Answered">
        <GridQuestions questions={props.answeredQuestions} title={"Done"} />
      </Tab>
    </Tabs>
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
    newQuestions: newQuestions.sort((a, b) => b.timestamp - a.timestamp),
    answeredQuestions: answeredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    ),
  };
};

export default connect(mapStateToProps)(Dashboard);
