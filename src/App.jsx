import { UserAuth } from "./context/AuthContext";
import NonUserRoute from "./routes/NonUserRoute";
import UserRoute from "./routes/UserRoute";
export default function App() {
  const { isLoggedOut } = UserAuth();
  return (
    <>
      <div>{isLoggedOut ? <NonUserRoute /> : <UserRoute />}</div>
    </>
  );
}
