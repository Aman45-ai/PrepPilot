import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import QuestionContext from "../context/QuestionContext";

const inputStyle =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10";

const labelStyle =
  "mb-2 block text-sm font-semibold text-slate-700";

const errorStyle =
  "mt-1.5 text-xs font-medium text-red-500";

const AddQuestion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      difficulty: "",
      status: "",
    },
  });

  const navigate = useNavigate();
  const { setQuestions } = useContext(QuestionContext);

  const onSubmit = (data) => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        ...data,
        id: crypto.randomUUID(),
      },
    ]);

    reset();
    navigate(-1);
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 pb-10">
      {/* Header */}
      <header>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
          📝
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Add New Question
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
          Build your interview preparation list. Add questions, select their
          difficulty, and track your progress.
        </p>
      </header>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        {/* Card Header */}
        <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-5 md:px-8">
          <h2 className="text-base font-bold text-slate-800">
            Question Details
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Fields marked with <span className="text-red-500">*</span> are
            required.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 p-5 md:p-8">
          {/* Question Title */}
          <div>
            <label htmlFor="title" className={labelStyle}>
              Question Title <span className="text-red-500">*</span>
            </label>

            <input
              id="title"
              type="text"
              placeholder="e.g. Two Sum, Reverse Linked List"
              className={`${inputStyle} ${
                errors.title
                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                  : ""
              }`}
              {...register("title", {
                required: "Question title is required!",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters long!",
                },
                validate: (value) =>
                  value.trim().length >= 3 ||
                  "Please enter a valid question title!",
              })}
            />

            {errors.title && (
              <p role="alert" className={errorStyle}>
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category, Difficulty & Status */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Category */}
            <div>
              <label htmlFor="category" className={labelStyle}>
                Category <span className="text-red-500">*</span>
              </label>

              <select
                id="category"
                className={`${inputStyle} ${
                  errors.category ? "border-red-300" : ""
                }`}
                {...register("category", {
                  required: "Please select a category!",
                })}
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="DSA">DSA</option>
                <option value="Git">Git & GitHub</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="Machine-Coding">Machine Coding</option>
              </select>

              {errors.category && (
                <p role="alert" className={errorStyle}>
                  {errors.category.message}
                </p>
              )}
            </div>


            <div>
              <label htmlFor="difficulty" className={labelStyle}>
                Difficulty <span className="text-red-500">*</span>
              </label>

              <select
                id="difficulty"
                className={`${inputStyle} ${
                  errors.difficulty ? "border-red-300" : ""
                }`}
                {...register("difficulty", {
                  required: "Please select difficulty!",
                })}
              >
                <option value="" disabled>
                  Select difficulty
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              {errors.difficulty && (
                <p role="alert" className={errorStyle}>
                  {errors.difficulty.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="status" className={labelStyle}>
                Status <span className="text-red-500">*</span>
              </label>

              <select
                id="status"
                className={`${inputStyle} ${
                  errors.status ? "border-red-300" : ""
                }`}
                {...register("status", {
                  required: "Please select a status!",
                })}
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              {errors.status && (
                <p role="alert" className={errorStyle}>
                  {errors.status.message}
                </p>
              )}
            </div>
          </div>
        </div>


        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/50 px-5 py-5 sm:flex-row sm:justify-end md:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Adding..." : "+ Add Question"}
          </button>
        </div>
      </form>

      <div className="flex items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
        <span className="text-lg">💡</span>

        <p className="text-sm leading-6 text-indigo-900">
          <span className="font-semibold">Prep tip:</span> Start with a
          manageable set of questions and update their status as you practice.
          Consistency matters more than quantity!
        </p>
      </div>
    </div>
  );
};

export default AddQuestion;