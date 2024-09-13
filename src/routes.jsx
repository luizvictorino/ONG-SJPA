import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SecaoVoluntarios from "./Pages/SecaoVoluntarios";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Pages/SecaoVoluntarios"
          element={<SecaoVoluntarios />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
