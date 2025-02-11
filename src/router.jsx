import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterMotorista from "./pages/RegisterMotorista";
import Layout from "./components/Layout";
import RegisterVeiculo from "./pages/RegisterVeiculo";

function WebRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-motorista" element={<RegisterMotorista />} />
          <Route path="/cadastro-veiculo" element={<RegisterVeiculo />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default WebRouter;
