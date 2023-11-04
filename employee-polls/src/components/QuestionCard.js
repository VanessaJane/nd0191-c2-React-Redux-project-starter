import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const QuestionCard = (props) => {
  const navigate = useNavigate();
  const handleShowQuestion = (event) => {
    event.preventDefault();
    navigate(`/questions/${props.question.id}`);
  };

  return (
    <div className="question_detail">
      <h4>{props.question.author}</h4>
      <p>{formatDate(props.question.timestamp)}</p>
      <hr
        style={{
          color: "gray",
          height: "1px",
        }}
      />
      <button className="submit_btn" onClick={handleShowQuestion}>
        Show
      </button>
    </div>
  );
};

export default connect()(QuestionCard);
