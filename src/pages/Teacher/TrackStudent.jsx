import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TrackStudentPage = () => {
  const student = { name: "JACK RYAN", rank: 5 };
  const quizData = [
    { quizName: "JavaScript Basics", score: 85, attemptDate: "2025-03-10" },
    { quizName: "Data Structures", score: 90, attemptDate: "2025-03-12" },
    { quizName: "React Fundamentals", score: 78, attemptDate: "2025-03-15" },
    { quizName: "Algorithms", score: 96, attemptDate: "2025-03-20" },
    { quizName: "Blockchain Basics", score: 60, attemptDate: "2025-03-21" },
    {
      quizName: "Cybersecurity Fundamentals",
      score: 79,
      attemptDate: "2025-03-22",
    },
    { quizName: "Algorithms", score: 88, attemptDate: "2025-03-23" },
  ];

  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-6 border border-gray-200 rounded-lg">
        <h1 className="text-2xl font-bold">Student: {student.name}</h1>
        <h2 className="text-lg font-semibold">Overall Rank: #{student.rank}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Bar Chart Section */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quiz Performance</h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={quizData}>
              <XAxis dataKey="quizName" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#00000" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Attempted Quizzes Table */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">All Attempted Quizzes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Quiz Name</th>
                  <th className="px-4 py-2 text-left">Score</th>
                  <th className="px-4 py-2 text-left">Attempt Date</th>
                  <th className="px-4 py-2 text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {quizData.map((quiz, index) => (
                  <tr key={index} className="border-t border-t-gray-200">
                    <td className="px-4 py-2">{quiz.quizName}</td>
                    <td className="px-4 py-2">{quiz.score}</td>
                    <td className="px-4 py-2">{quiz.attemptDate}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="bg-primary cursor-pointer text-white px-3 py-2 px-1 rounded-md ">
                        View Details
                      </button>
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
};

export default TrackStudentPage;
