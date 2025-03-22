import React, { useState } from "react";

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [questions, setQuestions] = useState([
    { id: 1, text: "", type: "mcq", options: [""] },
  ]);

  // Function to handle question changes
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  // Function to handle option changes
  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  // Function to add a new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: questions.length + 1, text: "", type: "mcq", options: [""] },
    ]);
  };

  // Function to add an option to a question
  const addOption = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  // Function to submit the quiz
  const handleSubmit = () => {
    console.log({
      quizName,
      deadline: `${deadlineDate} ${deadlineTime}`,
      questions,
    });
    alert("Quiz Created Successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Quiz Name & Deadline */}
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          placeholder="Quiz Name"
          className="border border-gray-300 p-2 rounded-xl w-1/2 text-center font-semibold"
        />
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={deadlineDate}
            onChange={(e) => setDeadlineDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-xl text-center"
          />
          <input
            type="time"
            value={deadlineTime}
            onChange={(e) => setDeadlineTime(e.target.value)}
            className="border border-gray-300 p-2 rounded-xl text-center"
          />
        </div>
      </div>

      {/* Questions Section */}
      {questions.map((q, qIndex) => (
        <div
          key={q.id}
          className="border border-gray-300 p-4 rounded-xl space-y-2"
        >
          <input
            type="text"
            value={q.text}
            onChange={(e) =>
              handleQuestionChange(qIndex, "text", e.target.value)
            }
            placeholder="Question"
            className="border border-gray-300 p-2 rounded-xl w-full"
          />

          {/* Question Type Selection - Radio Buttons */}
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name={`questionType_${q.id}`}
                value="mcq"
                checked={q.type === "mcq"}
                onChange={() => handleQuestionChange(qIndex, "type", "mcq")}
              />
              <span>Multiple Choice</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name={`questionType_${q.id}`}
                value="text"
                checked={q.type === "text"}
                onChange={() => handleQuestionChange(qIndex, "type", "text")}
              />
              <span>Text Input</span>
            </label>
          </div>

          {/* MCQ Options */}
          {q.type === "mcq" &&
            q.options.map((option, oIndex) => (
              <div key={oIndex} className="flex space-x-2 items-center">
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(qIndex, oIndex, e.target.value)
                  }
                  placeholder={`Option ${oIndex + 1}`}
                  className="border border-gray-300 p-2 rounded-xl w-full"
                />
              </div>
            ))}
          {q.type === "mcq" && (
            <button
              onClick={() => addOption(qIndex)}
              className="text-blue-500 text-sm mt-2"
            >
              + Add Option
            </button>
          )}
        </div>
      ))}

      {/* Add Question Button */}
      <button
        onClick={addQuestion}
        className="border border-gray-300 p-2 rounded-xl w-full bg-gray-100 hover:bg-gray-200 transition"
      >
        Add A Question
      </button>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="border border-gray-300 p-3 rounded-xl w-full bg-black text-white hover:bg-gray-900 transition"
      >
        Create Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
