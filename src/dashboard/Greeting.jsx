const Greeting = () => {
  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Welcome back, Aman! 👋</h1>
        <p className="mt-1 text-sm text-slate-500">
          Track your practice. Measure your progress. Ace your interviews.
        </p>
      </div>

      <div className="rounded-xl bg-indigo-100 px-4 py-3 text-sm">
        🎯 “Consistency today creates opportunities tomorrow.”
      </div>
    </header>
  );
};

export default Greeting;