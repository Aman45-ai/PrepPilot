
import QuestionProvider from "./context/QuestionProvider";
import Sidebar from "./layout/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <QuestionProvider>
      <div className="flex min-h-screen bg-slate-100 text-slate-800">
        <Sidebar />
        <main className="min-w-0 flex-1 p-4 pb-24 md:p-6 md:pb-6">
          <AppRoutes />
        </main>
      </div>
    </QuestionProvider>
  );
};

export default App;