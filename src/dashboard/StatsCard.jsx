import { useContext } from "react";
import QuestionContext from "../context/QuestionContext";


const StatsCard = () => {
  const { questions } = useContext(QuestionContext)
  const completed = questions.filter((q)=>{
    return q.status==="Completed"
  }).length

  const inProgress = questions.filter((q)=>{
    return q.status==="In Progress"
  }).length

  const pending = questions.filter((q)=>{
    return q.status==="Pending"
  }).length

  const stats = [
  {
    icon: "📚",
    title: "Total Questions",
    value: questions.length,
    note: "Across all categories",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: "✅",
    title: "Completed",
    value: completed,
    note: "Great Work!",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: "⏳",
    title: "In Progress",
    value: inProgress,
    note: "Keep going!",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: "📝",
    title: "Pending",
    value: pending,
    note: "Start practicing",
    color: "bg-blue-100 text-blue-600",
  },
];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl ${item.color}`}
          >
            {item.icon}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-500">
              {item.title}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {item.value}
            </h2>

            <span className="text-xs text-slate-400">
              {item.note}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;