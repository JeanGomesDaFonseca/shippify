import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./components/Layout";

function WebRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default WebRouter;
