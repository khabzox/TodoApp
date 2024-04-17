import { ReactNode } from "react";
export type FormProps = {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
};