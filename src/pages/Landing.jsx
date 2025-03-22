import React from "react";

const Landing = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" w-[80%] h-full py-20 px-20  rounded-2xl hover:scale-105 transtion-all border duration-400 shadow-2xl  bg-white">
        <p className="pt-10 pb-5 px-5 text-center text-2xl md:text-4xl sm:font-bold md:font-bold text-primary">
          EAZYQUIZZ SIMPLIFIES QUIZ CREATION AND GRADING WITH AI-POWERED
          INSIGHTS! MAKE ASSESSMENTS SMARTER AND MORE ENGAGING WITH EAZYQUIZZ
        </p>
        <p className=" pt-2 pb-5 px-6 text-center text-lg md:text-xl font-md text-primary">
          Teachers can create and evaluate quizzes effortlessly, while students
          receive instant feedback to enhance learning.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <button className="bg-primary text-white text-sm px-10 py-4 mt-6 md:mt-10 w-[30%]  cursor-pointer rounded-full">
            CREATE A QUIZ
          </button>
          <button className="bg-primary text-white text-sm px-10 py-4 mt-6 md:mt-10 w-[30%]  cursor-pointer rounded-full">
            TAKE A QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
