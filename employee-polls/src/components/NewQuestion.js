import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";

const NewQuestion = ({ dispatch }) => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.name === "firstOption") {
      setFirstOption(target.value);
    } else {
      setSecondOption(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(handleAddQuestion(firstOption, secondOption));
    setFirstOption("");
    setSecondOption("");
  };

  return (
    <div className="center_container">
      <h2 className="center">Would You Rather</h2>
      <h4 className="center">Create Your Own Poll</h4>
      <form onSubmit={handleSubmit} className="question_form">
        <label>
          First Option
          <input
            name="firstOption"
            type="text"
            value={firstOption}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Second Option
          <input
            name="secondOption"
            type="text"
            value={secondOption}
            onChange={handleInputChange}
          />
        </label>
        <button
          type="submit"
          disabled={firstOption === "" || secondOption === ""}
          className="submit_btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
