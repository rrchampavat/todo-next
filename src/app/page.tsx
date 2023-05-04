import Card from "@/components/card";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    // cache: "no-store",
  });
  const tasks: Task[] = await res.json();

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-4 place-content-between justify-between">
        {tasks?.map((task, id) => (
          <Card key={id} task={task} />
        ))}
      </div>
    </main>
  );
}
