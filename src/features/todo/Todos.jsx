import { useSelector } from "react-redux";
import { getTodos } from "./todoSlice";
import Todo from "./Todo";

export default function Todos() {
  const todos = useSelector(getTodos);

  return (
    <ul className="mb-10 flex  max-h-64 flex-col justify-center gap-4 overflow-y-auto py-4">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
