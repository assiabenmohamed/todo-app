import { useEffect, useRef, useState } from "react";
import Addtask from "./components/TaskForm";
import ListTask from "./components/TaskList";

function App() {
  const [todos, setTodos] = useState([]);
  const didMount = useRef(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  useEffect(() => {
    if (didMount.current) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      didMount.current = true;
    }
  }, [todos]);

  function AddTodo(description) {
    // Fonction pour ajouter une tâche

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), description: description, isDone: false },
    ]);
  }
  const handleToggle = (id) => {
    // Fonction pour basculer l'état isDone
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const handleDelete = (id) => {
    // Fonction pour supprimer une tâche
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((task) => task.id !== id));
    }
  };
  const updateTodo = (id, newDescription) => {
    // Fonction pour mettre à jour la description d'une tâche
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <>
      <div className="h-full w-full bg-[#00112d] p-6">
        <div className="flex gap-2">
          {/* Section Add Todo */}
          <div className="container mx-auto max-w-md  bg-[#011028] p-4 rounded-xl text-white flex gap-2 flex-col">
            <div>
              <h1 className="mb-4 text-center text-2xl font-bold">Add Todo</h1>
              <span className="text-gray-600">Type and save your task</span>
              <Addtask onAddTask={AddTodo} todos={todos} />{" "}
            </div>
           
            {/* Section List Todo */}
            <div className="flex items-center w-full gap-2">
              <div className="flex-1 h-px bg-white" />
              <h1 className="text-xl  text-white">List</h1>
              <div className="flex-1 h-px bg-white" />
            </div>
            <div>
              <span className="text-gray-600">Manage your tasks</span>
              <ListTask
                Todo={todos}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                handleEdit={updateTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
