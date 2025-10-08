import Todos from "./component/Todos";
export default function App() {
  // const [isLogin, setIsLogin] = useAuth();

  return (
    // <contextProvider>
    //   <>{isLogin ? <NonUserRoute /> : <UserRoute />}</>
    // </contextProvider>
    <>
      <Todos />
      {/* <AddTodo /> */}
    </>
  );
}
