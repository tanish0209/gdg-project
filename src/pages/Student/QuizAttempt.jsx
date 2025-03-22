import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";

const mockQuestions = [
  {
    id: 1,
    type: "mcq",
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    type: "mcq",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    type: "text",
    question:
      "Explain the concept of photosynthesis in your own words (minimum 50 words):",
    correctAnswer:
      "Photosynthesis is the process by which plants convert light energy into chemical energy. Using sunlight, water, and carbon dioxide, plants produce glucose and oxygen. This process occurs in the chloroplasts, specifically using the green pigment chlorophyll, and is essential for life on Earth as it provides both food and oxygen.",
    minWords: 50,
  },
];

function QuizAttempt() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    navigate(`/result/${quizId}`, {
      state: { answers, questions: mockQuestions },
    });
  };

  const currentQuestionData = mockQuestions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Quiz Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center text-white hover:text-gray-300 mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Quiz: {quizId} </h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-black rounded-full"
            style={{
              width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <p className="text-sm text-gray-600 mb-2">
          Question {currentQuestion + 1} of {mockQuestions.length}
        </p>
        <h2 className="text-xl font-semibold mb-4">
          {currentQuestionData.question}
        </h2>

        {currentQuestionData.type === "mcq" ? (
          <div className="space-y-3">
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-4 rounded-lg border ${
                  answers[currentQuestion] === option
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <textarea
              value={answers[currentQuestion] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              className="w-full h-40 p-4 rounded-lg bg-white/5 border border-black/20 text-black placeholder-gray-700"
              placeholder="Type your answer here..."
            />
            <p className="text-sm text-gray-700">Word count: 150 minimum</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-md border ${
            currentQuestion === 0
              ? "border-black/20 text-gray-500 cursor-not-allowed"
              : "px-4 py-2 border-white bg-gray-200 text-black rounded-md hover:bg-black hover:text-white"
          }`}
        >
          Previous
        </button>
        {currentQuestion === mockQuestions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-black hover:text-white"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-black hover:text-white"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizAttempt;
