import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const mockResults = {
    quizName: "Mathematics Quiz",
    totalQuestions: 3,
    correctQuestions: 2,
    incorrectQuestions: 1,
    questions: [
      {
        id: 1,
        type: 'mcq',
        question: "What is the capital of France?",
        userAnswer: "Paris",
        correctAnswer: "Paris",
        isCorrect: true,
        feedback: "Correct! Paris is indeed the capital of France. It's also known as the 'City of Light' and is the largest city in France."
      },
      {
        id: 2,
        type: 'mcq',
        question: "Which planet is known as the Red Planet?",
        userAnswer: "Mars",
        correctAnswer: "Mars",
        isCorrect: true,
        feedback: "Excellent! Mars appears red because of the iron oxide (rust) on its surface. It's the fourth planet from the Sun."
      },
      {
        id: 3,
        type: 'text',
        question: "Explain the concept of photosynthesis in your own words:",
        userAnswer: "Photosynthesis is the process where plants make their own food using sunlight. They take in water from the soil and carbon dioxide from the air, then use sunlight to convert these into glucose and oxygen.",
        correctAnswer: "Photosynthesis is the process by which plants convert light energy into chemical energy. Using sunlight, water, and carbon dioxide, plants produce glucose and oxygen. This process occurs in the chloroplasts, specifically using the green pigment chlorophyll.",
        isCorrect: false,
        feedback: "Your answer covers the basic concept but lacks some key details. Consider mentioning chloroplasts, chlorophyll, and the specific forms of energy conversion. Your explanation could be more technical and precise."
      }
    ],
    aiResponse: "Overall, you demonstrated a good understanding of general knowledge questions. Your multiple-choice responses were accurate, but there's room for improvement in detailed written explanations. Focus on including specific technical terms and processes in your answers."
  };
  
function Result() {
  const naviagte = useNavigate();
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <button
        onClick={() => {
          naviagte("/dashboard");
        }}
        className="flex items-center text-gray-700 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Dashboard
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Column - Quiz Stats */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg text-gray-900">
              {mockResults.quizName}
            </h2>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Total Questions</p>
            <p className="text-xl font-bold text-gray-900">
              {mockResults.totalQuestions}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-600">Correct Questions</p>
            <p className="text-xl font-bold text-green-600">
              {mockResults.correctQuestions}
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-gray-600">Incorrect Questions</p>
            <p className="text-xl font-bold text-red-600">
              {mockResults.incorrectQuestions}
            </p>
          </div>
        </div>

        {/* Right Column - Detailed Results */}
        <div className="md:col-span-3">
          {/* AI Overall Response */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Overall Analysis
            </h3>
            <p className="text-gray-700">{mockResults.aiResponse}</p>
          </div>

          {/* Questions and Answers */}
          <div className="space-y-6">
            {mockResults.questions.map((question, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-gray-900">
                    Question {index + 1}: {question.question}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      question.isCorrect
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {question.isCorrect ? "Correct" : "Incorrect"}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    Your Answer:{" "}
                    <span
                      className={
                        question.isCorrect ? "text-green-600" : "text-red-600"
                      }
                    >
                      {question.userAnswer}
                    </span>
                  </p>
                  {!question.isCorrect && (
                    <p className="text-gray-600">
                      Correct Answer:{" "}
                      <span className="text-green-600">
                        {question.correctAnswer}
                      </span>
                    </p>
                  )}
                  <div className="mt-4 bg-white p-4 rounded border border-gray-200">
                    <p className="text-gray-700">{question.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;