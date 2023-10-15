/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi2";
import { removeTodo } from "./todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Todo({ todo }) {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  function handleRemoveTodo() {
    if (check) {
      dispatch(removeTodo(todo.id));
      toast.success("Hurray 🥳");
    } else {
      toast.error("Finish the task first!");
    }
  }

  return (
    <li className="grid grid-cols-[24px_1fr_90px] gap-2 text-base tracking-wide text-stone-800">
      <span>
        <input
          type="checkbox"
          onChange={(e) => setCheck(e.target.checked)}
          className="accent-green-600"
        />
      </span>
      <span className={check ? "line-through" : ""}>{todo.text}</span>
      <span onClick={handleRemoveTodo}>
        <HiOutlineTrash className="inline-block text-xl text-red-600" />
      </span>
    </li>
  );
}
