import { useState } from "react";
import { useDispatch } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi2";
import { addTodo } from "./todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo(e) {
    e.preventDefault();

    if (!text) return;
    dispatch(addTodo(text));
    setText("");
  }

  return (
    <form onSubmit={handleAddTodo} className="mb-8 flex items-center gap-1">
      <input
        type="text"
        placeholder="Add your new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-4/6 rounded-sm border px-4 py-2 text-base tracking-wide text-stone-800 placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
      />

      <button className="rounded-sm bg-indigo-600 px-4 py-2 transition-all duration-300 hover:bg-indigo-700">
        <HiOutlinePlus className="text-2xl font-semibold text-indigo-50" />
      </button>
    </form>
  );
}
