import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import CreateUser from "../pages/CreateUser";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function NonUserRoute() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<div>Page Not Fount</div>} />
        </Routes>
      </Navbar>
    </>
  );
}
