import { notFound } from "next/navigation";
import Form from "./Form";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(`${process.env.API_URL}/tasks/${params.id}`, {
    method: "GET",
  });

  const task: Task = await data.json();
  if (!task) {
    notFound();
  }

  return <Form data={task} />;
};

export default page;
