import Greeting from "../dashboard/Greeting";
import StatsCard from "../dashboard/StatsCard";
import Filters from "../dashboard/Filters";
import QuestionSet from "../dashboard/QuestionSet";
import { useState } from "react";

const Dashboard = () => {
  const [search, setSearch] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [status, setStatus] = useState("")
  const [category, setCategory] = useState("")
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 pb-8">

      <section>
        <Greeting />
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Your Progress
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Here's an overview of your interview preparation.
          </p>
        </div>

        <StatsCard />
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex flex-col gap-2 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Your Questions
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage and track your interview practice questions.
            </p>
          </div>

          <span className="w-fit rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
            Practice Tracker
          </span>
        </div>


        <div className="p-4 md:p-6">
          <Filters setSearch={setSearch} setDifficulty={setDifficulty} setStatus={setStatus} setCategory={setCategory}/>

          <div className="mt-5">
            <QuestionSet search={search} difficulty={difficulty} status={status} category={category} />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Dashboard;