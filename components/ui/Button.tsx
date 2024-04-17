"use client";
import { buttonProps } from "@/types/buttonProps";
import clsx from "clsx";

export default function Button({ type, text, onClick, actionButton }: buttonProps) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
          `bg-orange-700 rounded-full p-2 text-white`,
          `bg-orange-700 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  );
};
