import React, { useState } from "react";
import { useNavigate } from "react-router";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([
    {
      serialNumber: 1,
      _id: "quiz_001",
      name: "JavaScript Basics",
      createdDate: "2025-03-21T10:00:00Z",
    },
    {
      serialNumber: 2,
      _id: "quiz_002",
      name: "Data Structures & Algorithms",
      createdDate: "2025-03-20T15:30:00Z",
    },
    {
      serialNumber: 3,
      _id: "quiz_003",
      name: "React Fundamentals",
      createdDate: "2025-03-19T08:45:00Z",
    },
    {
      serialNumber: 4,
      _id: "quiz_004",
      name: "Node.js & Express",
      createdDate: "2025-03-18T12:10:00Z",
    },
    {
      serialNumber: 5,
      _id: "quiz_005",
      name: "MongoDB Essentials",
      createdDate: "2025-03-17T16:20:00Z",
    },
    {
      serialNumber: 6,
      _id: "quiz_006",
      name: "HTML & CSS Mastery",
      createdDate: "2025-03-16T09:15:00Z",
    },
    {
      serialNumber: 7,
      _id: "quiz_007",
      name: "Python Programming",
      createdDate: "2025-03-15T14:50:00Z",
    },
    {
      serialNumber: 8,
      _id: "quiz_008",
      name: "Machine Learning Basics",
      createdDate: "2025-03-14T11:05:00Z",
    },
    {
      serialNumber: 9,
      _id: "quiz_009",
      name: "Cybersecurity Fundamentals",
      createdDate: "2025-03-13T18:25:00Z",
    },
    {
      serialNumber: 10,
      _id: "quiz_010",
      name: "SQL & Database Design",
      createdDate: "2025-03-12T10:40:00Z",
    },
    {
      serialNumber: 11,
      _id: "quiz_011",
      name: "Blockchain Basics",
      createdDate: "2025-03-11T15:55:00Z",
    },
    {
      serialNumber: 12,
      _id: "quiz_012",
      name: "C++ Advanced Topics",
      createdDate: "2025-03-10T08:30:00Z",
    },
    {
      serialNumber: 13,
      _id: "quiz_013",
      name: "AI & Deep Learning",
      createdDate: "2025-03-09T17:45:00Z",
    },
    {
      serialNumber: 14,
      _id: "quiz_014",
      name: "Flutter Mobile Dev",
      createdDate: "2025-03-08T13:10:00Z",
    },
    {
      serialNumber: 15,
      _id: "quiz_015",
      name: "AWS Cloud Essentials",
      createdDate: "2025-03-07T09:20:00Z",
    },
  ]);

  const [students, setStudents] = useState([
    { serialNumber: 1, name: "Alice Johnson", rank: 1 },
    { serialNumber: 2, name: "Bob Smith", rank: 2 },
    { serialNumber: 3, name: "Charlie Brown", rank: 3 },
    { serialNumber: 4, name: "David Williams", rank: 4 },
    { serialNumber: 5, name: "Emma Davis", rank: 5 },
    { serialNumber: 6, name: "Frank Miller", rank: 6 },
    { serialNumber: 7, name: "Grace Wilson", rank: 7 },
    { serialNumber: 8, name: "Henry Moore", rank: 8 },
    { serialNumber: 9, name: "Isabella Garcia", rank: 9 },
    { serialNumber: 10, name: "Jack Taylor", rank: 10 },
    { serialNumber: 11, name: "Kevin Anderson", rank: 11 },
    { serialNumber: 12, name: "Lily Martinez", rank: 12 },
    { serialNumber: 13, name: "Michael Thomas", rank: 13 },
    { serialNumber: 14, name: "Natalie Harris", rank: 14 },
    { serialNumber: 15, name: "Oliver Clark", rank: 15 },
  ]);
  return (
    <div className="border border-gray-300 p-4 m-10 rounded-4xl min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-2 w-full  gap-6">
        {/* Quizzes Section */}
        <div className="border border-gray-200 p-4 rounded-2xl">
          <p className="mb-3 text-xl font-medium">All Quizzes</p>
          <div className="bg-white border border-gray-200 rounded text-sm max-h-[90vh] min-h-[80vh] overflow-y-scroll">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-[0.5fr_5fr_3fr] py-3 px-6 border-b border-gray-200 font-semibold bg-black text-white">
              <p>#</p>
              <p>Quiz Name</p>
              <p>Created On</p>
            </div>

            {/* Quiz List */}
            {quizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="grid grid-cols-[0.5fr_5fr_3fr] py-4 px-6 border-b border-gray-200 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <p>{quiz.serialNumber}</p>
                <p>{quiz.name}</p>
                <p>{new Date(quiz.createdDate).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Create Quiz & Students List) */}
        <div className="flex flex-col gap-4">
          {/* Create Quiz Button */}
          <button
            onClick={() => navigate("/teacher/create-quiz")}
            className="bg-black text-white text-sm px-4 py-4 w-full rounded-2xl hover:bg-black/90 transition"
          >
            CREATE QUIZ
          </button>

          {/* Student List (Placeholder) */}
          <div className="border border-gray-200 p-4 rounded-2xl">
            <p className="mb-3 text-xl font-medium">All Students</p>
            <div className="bg-white border border-gray-200 rounded text-sm max-h-[80vh] min-h-[80vh] overflow-y-scroll">
              {/* Table Header */}
              <div className="hidden sm:grid grid-cols-[0.5fr_5fr_3fr] py-3 px-6 border-b border-gray-200 font-semibold bg-primary text-white">
                <p>#</p>
                <p>Student Name</p>
                <p>Rank</p>
              </div>

              {/* Student List */}
              {students.map((student) => (
                <div
                  key={student.serialNumber}
                  className="grid grid-cols-[0.5fr_5fr_3fr] py-4 px-6 border-b border-gray-200 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <p>{student.serialNumber}</p>
                  <p>{student.name}</p>
                  <p>{student.rank}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
