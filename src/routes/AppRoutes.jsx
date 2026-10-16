import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AddQuestion from "../components/AddQuestion";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddQuestion />} />
    </Routes>
  );
};

export default AppRoutes;