import { useEffect, useState } from "react";

export default function todo() {
  const [todos, setTodos] = useState(() => {
    const savedDataToLocalStorage = localStorage.getItem("todos");
    try {
      const parsed = savedDataToLocalStorage
        ? JSON.parse(savedDataToLocalStorage)
        : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      setMessage(err.message);
      return [];
    }
  });
  console.log(todos);
  // adding State
  const [newTodo, setNewTodo] = useState("");
  // show message
  const [message, setMessage] = useState("");
  // search
  const [search, setSearch] = useState("");

  // todos search
  const filterSearch = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );
  // add todo function

  // unique Id

  const randomIdGenerator = () => {
    let idGeneratePath = "abcdefghijklmnopqrstuvwxyz123456789?><!@#$%^&*";
    let uniqueId = "";
    for (let x = 0; x < 5; x++) {
      const generateId = Math.floor(Math.random() * idGeneratePath.length);
      uniqueId += idGeneratePath[generateId];
    }
    return uniqueId;
  };

  // setTimeout(() => {
  //   setMessage("");
  // }, 5000);
  useEffect(() => {
    const timer = setTimeout(() => setMessage(""));
    return () => clearTimeout(timer);
  }, [message]);
  // unique Id
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newItemTodo = {
      id: randomIdGenerator(),
      task: newTodo,
      createAt: new Date().toISOString(),
    };
    const update = [...todos, newItemTodo];
    setTodos(update);
    localStorage.setItem("todos", JSON.stringify(update));
    setNewTodo("");
    setMessage("todo added successfully");
  };

  // Delete Todos
  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
    setMessage("todos deleted");
  };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <div>
      {message &&
        (message.toLowerCase().includes("successful") ? (
          <p className="absolute right-4 top-8 z-[1] bg-green-500 max-w-[300px] w-full text-white px-9 py-3 normal-case text-[16px]">
            {message}
          </p>
        ) : (
          <p className="absolute right-4 top-8 z-[1] bg-red-500 max-w-[300px] w-full text-white px-9 py-3 normal-case text-[16px]">
            {message}
          </p>
        ))}
      <div className="container max-w-[1200px] m-auto px-5">
        <div className="grid grid-cols-2 gap-5">
          {/* new todd adding */}
          <div className="add-todo flex flex-col px-5 py-4 items-center justify-center gap-3 max-w-[300px] w-full h-full bg-gray-50 shadow-sm shadow-gray-300">
            <input
              type="text"
              placeholder="Add todo.."
              name="todo"
              id="todo"
              value={newTodo}
              className="w-full max-w-[300px] bg-gray-100 py-3 px-2 text-gray-400 font-semibold text-[20px] normal-case shadow-sm shadow-gray-400 outline-none transition-all duration-300 ease-out"
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <input
              type="submit"
              className="bg-gray-200 px-8 py-3 cursor-pointer text-black font-semibold text-[20px] capitalize tracking-[1px] hover:bg-gray-300 transition-all duration-300 ease-in-out"
              value="Add Now"
              onClick={handleAddTodo}
            />
          </div>
          {/* new todd adding */}
          <>
            <input
              type="text"
              name="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search todos item"
              className="w-full max-w-[250px] bg-gray-50 shadow-gray-300 px-2 py-3 mb-4 cursor-pointer outline-none"
              id="text"
            />

            {/* show todos table */}
            <table className="w-full border-collapse border border-gray-300 text-center shadow-md rounded-md overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">Task</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Created At
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {todos.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-4 text-gray-500 italic">
                      Nothing to do yet...
                    </td>
                  </tr>
                ) : (
                  filterSearch.map((todo, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        {todo.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 capitalize">
                        {todo.task}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm text-gray-500">
                        {todo.createAt}
                      </td>
                      <td className="border border-gray-300 space-y-2 space-x-2 px-4 py-2 space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-all">
                          Edit
                        </button>
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-all">
                          Update
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all"
                          onClick={() => handleDeleteTodo(todo.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </>
          {/* show todos table */}
        </div>
      </div>
    </div>
  );
}
