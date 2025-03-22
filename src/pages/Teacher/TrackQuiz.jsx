import React, { useState } from "react";

const TrackQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      questionId: "q001",
      questionNumber: 1,
      question: "What is the difference between an array and a linked list?",
    },
    {
      questionId: "q002",
      questionNumber: 2,
      question:
        "Explain the time complexities of different sorting algorithms.",
    },
    {
      questionId: "q003",
      questionNumber: 3,
      question: "What is a binary search tree (BST), and how does it work?",
    },
    {
      questionId: "q004",
      questionNumber: 4,
      question:
        "Describe the operations that can be performed on a stack and their complexities.",
    },
    {
      questionId: "q005",
      questionNumber: 5,
      question: "How do you detect a cycle in a linked list?",
    },
    {
      questionId: "q006",
      questionNumber: 6,
      question:
        "What is dynamic programming, and how does it differ from recursion?",
    },
    {
      questionId: "q007",
      questionNumber: 7,
      question: "Explain the difference between BFS and DFS.",
    },
    {
      questionId: "q008",
      questionNumber: 8,
      question: "What is a heap, and how is it used in priority queues?",
    },
    {
      questionId: "q009",
      questionNumber: 9,
      question:
        "How do you find the lowest common ancestor (LCA) of two nodes in a BST?",
    },
    {
      questionId: "q010",
      questionNumber: 10,
      question: "What is the two-pointer technique, and where is it used?",
    },
    {
      questionId: "q011",
      questionNumber: 11,
      question: "Explain how a hash table works and its time complexity.",
    },
    {
      questionId: "q012",
      questionNumber: 12,
      question: "What are the different types of graph representations?",
    },
    {
      questionId: "q013",
      questionNumber: 13,
      question: "How do you implement a queue using stacks?",
    },
    {
      questionId: "q014",
      questionNumber: 14,
      question:
        "What is the difference between a greedy algorithm and dynamic programming?",
    },
    {
      questionId: "q015",
      questionNumber: 15,
      question: "How do you find the shortest path in an unweighted graph?",
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
      <p className="mb-3 text-2xl font-semibold">
        Data Structures and Algorithms Quiz
      </p>
      <div className="grid grid-cols-2 w-full  gap-6">
        {/* Questions Section */}
        <div className="border border-gray-200 p-4 rounded-2xl">
          <p className="mb-3 text-xl font-medium py-2 border-b border-b-gray-200">
            All Questions
          </p>
          <div className="bg-white py-4  rounded text-sm  min-h-[80vh] ">
            {/* Table Header */}
            {questions.map((question) => (
              <div key={question._id} className="mb-6">
                <p className="text-xl font-medium">
                  Question {question.questionNumber}:
                </p>
                <p className="text-xl  text-gray-700">{question.question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Create Quiz & Students List) */}
        <div className="flex flex-col gap-4">
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

export default TrackQuiz;
