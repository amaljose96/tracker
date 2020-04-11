import React from "react";

let colorMap = {
  bad: "bg-red-100 border border-red-400 text-red-700",
  good: "bg-green-100 border border-green-400 text-green-700",
  pending: "bg-yellow-100 border border-yellow-400 text-yellow-700",
};
export default function Alert({ type, title, text , onClose}) {
  return (
    <div class={`${colorMap[type]} px-4 py-3 rounded relative`} role="alert">
      <strong class="font-bold">{title}</strong>
      <span class="block sm:inline">{text}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose}>
        <svg
          class="fill-current h-6 w-6 "
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}