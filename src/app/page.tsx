import Accordion from "@/components/ui/Accordian/Accordian";

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/tasks`);
  const tasks: Task[] = await res?.json();

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-4 place-content-between justify-between">
        {tasks?.map((task, id) => (
          <Accordion
            key={id}
            value={task?.id}
            title={task?.title}
            description={task?.description}
            date={new Intl.DateTimeFormat("default", {
              month: "short",
              day: "2-digit",
            }).format(new Date(task?.created_at!))}
            collapsible
            btnTxt="Edit"
            id={task?.id}
            icon="CheckCircle"
            iconClr={task?.isCompleted ? "green" : "red"}
          />
        ))}
      </div>
    </main>
  );
}
