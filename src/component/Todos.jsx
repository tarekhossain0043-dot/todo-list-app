import { useEffect, useState } from "react";
export default function Todos() {
  const [user, setUser] = useState({ names: "Tarek", age: 22 });
  const [message, setMessage] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });
  console.log(todos);
  //Random Id Number
  const customUniId = "123456789abcdefghijklmnopqrstuvwxyz?><!@#$%";
  let unique = "";
  for (let x = 0; x < 5; x++) {
    const randomIndex = Math.floor(Math.random() * customUniId.length);
    unique += customUniId[randomIndex];
  }
  // Update user Name
  const changeNameFun = () => {
    setUser({ ...user, names: "Tanvir" });
  };

  // Add user / todos
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask = {
      id: unique,
      task: newTodo,
      completed: "false",
    };
    const addTodo = setTodos([...todos, newTask]);
    localStorage.setItem("todos", JSON.stringify(addTodo));
    setMessage("todos added succesfully");
    setNewTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
    setMessage("todos deleted!");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message]);
  // Add New Todo functions

  // search todos
  const filterTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );

  // default show 5 todos
  const visibleTodos =
    search.trim() === "" ? filterTodos.slice(0, 3) : filterTodos;

  return (
    <div>
      {message &&
        (message.toLowerCase().includes("succesfully") ? (
          <p className="text-white bg-green-700 px-8 py-2 shadow-sm shadow-green-400 transition-all ease-out absolute left-[20px] top-[40px] z-[1] animate-pulse">
            {message}
          </p>
        ) : (
          <p className="text-white bg-red-800 transition-all ease-out px-8 py-2 shadow-sm shadow-red-400 transition-all ease-out absolute left-[20px] top-[40px] z-[1] animate-pluse">
            {message}
          </p>
        ))}

      <h2 className="text-center text-red-500 capitalize">
        Hello {user.names}
      </h2>
      <button
        onClick={changeNameFun}
        className="px-4 py-3 bg-gray-200 text-red-400 capitalize transition-all ease-linear hover:text-green-300"
      >
        Change Name
      </button>
      <div className="add-new-todo mt-20 p-5 max-w-[400px] ml-[30px] h-full bg-gray-200 shadow-md shadow-red-200 rounded-md">
        {/* <form action="#"> */}
        <div className="input-field">
          <input
            type="text"
            name="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="px-3 py-2 w-full bg-white outline-none rounded-sm text-[20px] capitalize font-normal"
            placeholder="Add New Todos.."
          />
        </div>
        <button
          type="submit"
          onClick={handleAddTodo}
          className="px-6 inline-block mt-2 cursor-pointer py-3 bg-white shadow-sm shadow-gray-500 rounded-sm transition-colors ease-in-out hover:text-gray-500 capitalize font-semibold"
        >
          Add New
        </button>
        {/* </form> */}
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <h2 className="text-[40px] uppercase font-semibold text-center text-red-500">
          my todo
        </h2>
        {/* <form action="#"> */}
        <input
          type="text"
          name="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-2 px-3 py-2 w-full bg-white outline-none rounded-sm text-[20px] font-normal border-b border-b-gray-200 mb-3"
          placeholder="Search Todos.."
        />
        {/* </form> */}

        <table className="table m-auto text-center w-[600px] w-full z-[1] max-h-[500px] bg-white shadow-sm shadow-red-400">
          <thead className="border table-caption">
            <tr className="flex items-center justify-between p-3">
              <th>#</th>
              <th>Task</th>
              <th>Completed</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody className="table-caption border py-1 px-4">
            {visibleTodos.length === 0 ? (
              <p>No Todos Yeat.</p>
            ) : (
              visibleTodos.map((todo) => (
                <tr
                  key={todo.id}
                  className="py-2 border-b flex items-center justify-between last:border-b-0"
                >
                  <td>{todo.id}</td>
                  <td>{todo.task}</td>
                  <td>{todo.completed}</td>
                  <td>
                    <button className="px-4 py-3 hover:bg-gray-500 bg-gray-200 text-green-300 transition-colors ease-in-out">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="px-4 py-3 hover:bg-gray-500 bg-gray-200 text-red-300 transition-colors ease-in-out"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
