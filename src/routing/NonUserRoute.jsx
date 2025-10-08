import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import { Route, Routes } from "react-router-dom";
export default function NonUserRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
