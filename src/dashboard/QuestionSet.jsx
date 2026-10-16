import { useContext, useState } from "react";
import QuestionContext from "../context/QuestionContext";

const levelColor = {
  Easy: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20",
  Medium: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20",
  Hard: "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20",
};

const statusColor = {
  Completed:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20",
  "In Progress":
    "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20",
  Pending:
    "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/20",
};

const badge =
  "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold";

const cols = "md:grid-cols-[3fr_1.1fr_1fr_1.2fr_0.9fr]";

const inputStyle =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition hover:border-indigo-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

const QuestionSet = ({
  search = "",
  difficulty,
  status,
  category,
}) => {
  const { questions, setQuestions } = useContext(QuestionContext);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [editError, setEditError] = useState("");

  const filteredQuestions = questions.filter((q) => {
    return (
      q.title.toLowerCase().includes(search.toLowerCase()) &&
      (difficulty === "" || difficulty === undefined || q.difficulty === difficulty) &&
      (status === "" || status === undefined || q.status === status) &&
      (category === "" || category === undefined || q.category === category)
    );
  });

  const startEditing = (q) => {
    setEditingId(q.id);
    setEditData({
      title: q.title,
      category: q.category,
      difficulty: q.difficulty,
      status: q.status,
    });
    setEditError("");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditData({});
    setEditError("");
  };

  const saveQuestion = (id) => {
    if (!editData.title.trim()) {
      setEditError("Question title cannot be empty.");
      return;
    }

    setQuestions((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              ...editData,
              title: editData.title.trim(),
            }
          : item
      )
    );

    cancelEditing();
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((item) => item.id !== id));

    if (editingId === id) {
      cancelEditing();
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40">
      <div
        className={`hidden gap-3 border-b border-slate-200 bg-slate-50/80 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 md:grid ${cols}`}
      >
        <span>Question</span>
        <span>Category</span>
        <span>Difficulty</span>
        <span>Status</span>
        <span className="text-center">Actions</span>
      </div>

      {questions.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100 text-3xl shadow-sm">
            📝
          </div>

          <h3 className="text-lg font-bold text-slate-800">
            No questions yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Your practice list is empty. Add your first question to start
            tracking your interview preparation.
          </p>
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100 text-3xl shadow-sm">
            🔍
          </div>

          <h3 className="text-lg font-bold text-slate-800">
            No matching questions found
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Try changing your search or filters to find the questions you are
            looking for.
          </p>
        </div>
      ) : (
        filteredQuestions.map((q) => (
          <div
            key={q.id}
            className={`group flex flex-wrap items-center gap-3 border-b border-slate-100 px-4 py-5 transition-all duration-200 last:border-b-0 hover:bg-indigo-50/40 md:grid md:gap-3 md:px-5 ${cols}`}
          >
            <div className="w-full min-w-0 md:w-auto">
              {editingId === q.id ? (
                <div className="w-full">
                  <input
                    type="text"
                    value={editData.title}
                    onChange={(e) => {
                      setEditData({
                        ...editData,
                        title: e.target.value,
                      });
                      setEditError("");
                    }}
                    placeholder="Enter question title"
                    className={inputStyle}
                    autoFocus
                  />

                  {editError && (
                    <p className="mt-1.5 text-xs font-medium text-rose-600">
                      {editError}
                    </p>
                  )}
                </div>
              ) : (
                <strong className="block wrap-break-word text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-indigo-600">
                  {q.title}
                </strong>
              )}
            </div>

            {editingId === q.id ? (
              <select
                value={editData.category}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    category: e.target.value,
                  })
                }
                className={inputStyle}
              >
                <option value="DSA">DSA</option>
                <option value="Git">Git & GitHub</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="Machine-Coding">Machine Coding</option>
              </select>
            ) : (
              <span className="inline-flex w-fit items-center rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 ring-1 ring-inset ring-violet-600/10">
                {q.category}
              </span>
            )}

            {editingId === q.id ? (
              <select
                value={editData.difficulty}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    difficulty: e.target.value,
                  })
                }
                className={inputStyle}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            ) : (
              <span
                className={`${badge} ${levelColor[q.difficulty] || "bg-slate-100 text-slate-600"}`}
              >
                {q.difficulty}
              </span>
            )}

            {editingId === q.id ? (
              <select
                value={editData.status}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    status: e.target.value,
                  })
                }
                className={inputStyle}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            ) : (
              <span
                className={`${badge} ${statusColor[q.status] || "bg-slate-100 text-slate-600"}`}
              >
                <span
                  className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                    q.status === "Completed"
                      ? "bg-emerald-500"
                      : q.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-slate-400"
                  }`}
                />
                {q.status}
              </span>
            )}

            <div className="ml-auto flex w-full items-center justify-end gap-2 md:ml-0 md:w-auto md:justify-center">
              {editingId === q.id ? (
                <>
                  <button
                    type="button"
                    onClick={() => saveQuestion(q.id)}
                    className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={cancelEditing}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    aria-label={`Edit ${q.title}`}
                    title="Edit question"
                    onClick={() => startEditing(q)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent text-slate-500 transition hover:border-indigo-100 hover:bg-indigo-100/70 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    ✏️
                  </button>

                  <button
                    type="button"
                    aria-label={`Delete ${q.title}`}
                    title="Delete question"
                    onClick={() => deleteQuestion(q.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent text-slate-500 transition hover:border-rose-100 hover:bg-rose-100/70 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    🗑️
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QuestionSet;