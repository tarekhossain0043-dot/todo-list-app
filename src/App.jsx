import Layout from "./prac-component/Layout";
import MyTodo from "./prac-component/PracTodo";
import TodosLogic from "./prac-component/TodosLogic";
export default function App() {
  // const [isLogin, setIsLogin] = useAuth();
  return (
    <>
      <Layout>
        <TodosLogic />
        <MyTodo />
      </Layout>
    </>
  );
}
