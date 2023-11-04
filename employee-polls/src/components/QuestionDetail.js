import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Poll from "./Poll";
import AnsweredPoll from "./AnsweredPoll";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const QuestionDetail = (props) => {
  if (props.question === undefined) {
    return <NotFoundPage />;
  }

  const avatar =
    props.avatarURL === undefined
      ? "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg"
      : props.avatarURL;
  return (
    <div className="option_detail">
      <h2 className="center">Poll by {props.authorName}</h2>
      <img
        src={avatar}
        alt={`Avatar of ${props.question.author}`}
        style={{ width: "120px", height: "120px" }}
        className="rounded-circle"
      />
      <hr
        style={{
          color: "gray",
          height: "1px",
        }}
      />
      {props.answered === undefined ? (
        <Poll question={props.question} />
      ) : (
        <AnsweredPoll
          question={props.question}
          answer={props.answered}
          numberOfUsers={props.numberOfUsers}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { question_id } = props.router.params;
  const question = questions[question_id];
  const author = users[question.author];
  const listAnswer = users[authedUser].answers;

  return {
    answered: listAnswer[question_id],
    question: question,
    avatarURL: author.avatarURL,
    authorName: author.name,
    numberOfUsers: Object.keys(users).length,
  };
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));
