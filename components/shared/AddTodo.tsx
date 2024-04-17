import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function AddTodo() {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input
          name="input"
          type="text"
          placeholder="Add Todo..."
        />
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};