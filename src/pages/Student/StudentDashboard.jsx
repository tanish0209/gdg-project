import React from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// data fetch from backend : sample data right now
const mockQuizzes = [
  { id: 1, title: "Mathematics Quiz", score: 85, date: "2024-03-10" },
  { id: 2, title: "Science Quiz", score: 92, date: "2024-03-08" },
  { id: 3, title: "History Quiz", score: 78, date: "2024-03-05" },
  { id: 4, title: "History Quiz", score: 78, date: "2024-03-05" },
];

const mockUpcomingQuizzes = [
  { id: 5, title: "Geography Quiz", deadline: "2024-03-15" },
  { id: 6, title: "Literature Quiz", deadline: "2024-03-18" },
];

// Chart Mapping
const chartData = {
  labels: mockQuizzes.map((item) => item.title),
  datasets: [
    {
      label: "Score (%)",
      data: mockQuizzes.map((item) => item.score),
      backgroundColor: "#43995a",
    },
  ],
};

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Upcoming Quizzes */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Upcoming Quizzes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {mockUpcomingQuizzes.map((quiz) => (
            <div key={quiz.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Deadline: {quiz.deadline}
              </p>
              <button
                onClick={() => navigate(`/quiz/${quiz.id}`)}
                className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Performance Overview
          </h2>
          <div className="w-full h-64">
            <Bar data={chartData} />
          </div>
        </div>

        {/* Recent Attempts */}
        <div className="bg-white rounded-lg shadow p-6 overflow-hidden">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Attempts
          </h2>

          {/*Previous Quizzes*/}
          <div className="overflow-y-auto max-h-80">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Quiz Name</th>
                  <th className="text-left py-3 px-4">Score</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockQuizzes.map((quiz) => (
                  <tr key={quiz.id} className="border-b">
                    <td className="py-3 px-4">{quiz.title}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {quiz.score}%
                      </span>
                    </td>
                    <td className="py-3 px-4">{quiz.date}</td>
                    <td className="py-3 px-4">
                      <Link
                        to={`/result/${quiz.id}`}
                        className="text-black hover:text-indigo-900"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
