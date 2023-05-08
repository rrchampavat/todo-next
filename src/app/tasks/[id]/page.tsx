import { notFound } from "next/navigation";
import Form from "./Form";
import { getSingle } from "@/lib/helper";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const task: Task = await getSingle({ table: "tasks", id: id });

  if (!task) {
    notFound();
  }

  return <Form data={task} />;
};

export default page;
