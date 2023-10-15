import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { getTodos } from "./features/todo/todoSlice";
import AddTodo from "./features/todo/AddTodo";
import Todos from "./features/todo/Todos";
import Header from "./ui/Header";

export default function App() {
  const todos = useSelector(getTodos);
  const numTodos = todos.length;

  return (
    <div className="mx-auto my-20 max-w-lg rounded-md border px-16 py-8">
      <Header />
      <AddTodo />
      <Todos />
      {numTodos > 0 && (
        <p className="text-center text-xs tracking-wide text-stone-600">{`You have ${numTodos} pending ${
          numTodos === 1 ? "task" : "tasks"
        }`}</p>
      )}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "10px 20px",
            backgroundColor: "#f9fafb",
            color: "#1f2937",
          },
        }}
      />
    </div>
  );
}
