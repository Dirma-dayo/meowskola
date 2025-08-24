import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreakFree from "./pages/BreakFree";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/breakfree" element={<BreakFree/>} />

      </Routes>
    </Router>
  );
}
