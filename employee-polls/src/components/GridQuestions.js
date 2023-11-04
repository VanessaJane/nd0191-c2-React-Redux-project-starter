import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { Col, Row } from "react-bootstrap";

const GridQuestion = (props) => {
  console.log(props);
  return (
    <div>
      <div className="border-box">
        <p className="grid_header">{props.title}</p>
      </div>
      <div className="border-box">
        <Row xs={1} md={3} className="g-4">
          {props.questions.map((question, idx) => (
            <Col key={idx}>
              <QuestionCard question={question} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default connect()(GridQuestion);
