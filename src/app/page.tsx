import Card from "@/components/ui/Card/Card";
import { getAll } from "@/lib/helper";
import { notFound } from "next/navigation";

// export const revalidate = 0;

export default async function Home() {
  const tasks: Task[] = await getAll("tasks");

  if (!tasks?.length) {
    notFound();
  }

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-4 place-content-between justify-between gap-4 mb-5">
        {tasks?.map((task) => (
          <Card
            key={task?.id}
            title={task?.title}
            description={new Intl.DateTimeFormat("default", {
              month: "short",
              day: "2-digit",
            }).format(new Date(task?.created_at!))}
            content={task?.description}
            btnTxt="Edit"
            icon="CheckCircle"
            icnClr={task?.isCompleted ? "green" : "red"}
            id={task?.id}
            task={task}
          />
        ))}
      </div>
    </main>
  );
}
