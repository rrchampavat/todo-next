import { notFound } from "next/navigation";
import Form from "./Form";
import { getAll, getSingle } from "@/lib/helper";

export const revalidate = 0;

// export async function generateStaticParams() {
//   const tasks: Task[] = await getAll("tasks");

//   return tasks?.map((task: Task) => ({ id: task?.id?.toString() }));
// }

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const task: Task = await getSingle({ table: "tasks", id: id });

  if (!task) {
    notFound();
  }

  return <Form data={task} />;
};

export default page;
