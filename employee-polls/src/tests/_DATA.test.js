import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("saveQuestionAnswer", () => {
  test("should return question object when pass correctly formatted data", async () => {
    const mockValidData = {
      optionOneText: "choose ios",
      optionTwoText: "choose react",
      author: "lien",
    };
    const formattedQuestion = await _saveQuestion(mockValidData);
    expect(formattedQuestion.author).toBe("lien");
    expect(formattedQuestion.optionOne.text).toBe("choose ios");
    expect(formattedQuestion.optionTwo.text).toBe("choose react");
  });

  test("should reject when pass incorrectly formatted data", async () => {
    const mockInvalidData = {
      optionOneText: "choose react",
      author: "lien",
    };
    await expect(_saveQuestion(mockInvalidData)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  test("should return question object when pass correctly formatted data", async () => {
    const mockValidData = {
      authedUser: "zoshikanlu",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionTwo",
    };
    const result = await _saveQuestionAnswer(mockValidData);
    expect(result).toBe(true);
  });

  test("should reject when pass incorrectly formatted data", async () => {
    const mockInvalidData = {
      authedUser: "choose ios",
      answer: "optionTwo",
    };
    await expect(_saveQuestionAnswer(mockInvalidData)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
