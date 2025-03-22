import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import TrackQuiz from "./pages/Teacher/TrackQuiz";
import CreateQuiz from "./pages/Teacher/CreateQuiz";
import TrackStudent from "./pages/Teacher/TrackStudent";
import StudentDashboard from "./pages/Student/StudentDashboard";
import QuizAttempt from "./pages/Student/QuizAttempt";
import Result from "./pages/Student/Result";

const App = () => {
  return (
    <div>
      {/* Navbar component will be present on all the pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/track-quiz" element={<TrackQuiz />} />
        <Route path="/teacher/create-quiz" element={<CreateQuiz />} />
        <Route path="/teacher/track-student" element={<TrackStudent />} />
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/quiz/:quizId" element={<QuizAttempt />} />
        <Route path="/student/result/:quizId" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
