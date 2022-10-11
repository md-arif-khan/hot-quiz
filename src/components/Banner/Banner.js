import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner  lg:h-[500px] md:h-[400px] h-[300px]">
        <div className="overlay flex justify-center items-center">
            <div className="lg:w-2/4 md:w-3/4 sm:p-5 p-5 text-center">
               <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-2xl xs:text-4xl text-white font-bold mb-5">Quizzes to strengthen your relationships</h1>
               <p className="lg:text-[20px]  md:text-[20px] text-white">Take this quiz to track your moods and determine if you may have mania and if you can benefit from seeing a mental health professional.</p>
            </div>
        </div>
    </div>
  );
};

export default Banner;
