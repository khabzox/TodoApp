"use client";

import { useRef } from "react";
import { FormProps } from "@/types/FormProps";


export default function Form({ children, action, className, onSubmit }: FormProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};