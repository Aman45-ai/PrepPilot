import { useContext, useState } from "react";
import QuestionContext from "../context/QuestionContext";

const inputStyle = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm";

const Filters = ({ setSearch, setCategory, setStatus, setDifficulty }) => {
  const { questions } = useContext(QuestionContext)

  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <input type="text" placeholder="Search questions..." className={`${inputStyle} lg:col-span-2`}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />

      <select
        className={inputStyle}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="DSA">DSA</option>
        <option value="Git">Git & GitHub</option>
        <option value="Full-Stack">Full-Stack</option>
        <option value="Machine-Coding">Machine Coding</option>
      </select>

      <select className={inputStyle}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <select className={inputStyle}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Completed">Completed</option>
        <option value="In Progress">In Progress</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default Filters;