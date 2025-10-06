import { Link } from "react-router-dom";
export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/create-user">Register</Link>
      </nav>
      {children}
    </>
  );
}
