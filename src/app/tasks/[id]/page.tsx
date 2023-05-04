import {
  TypographyLarge,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/Typography";
import styles from "../style.module.css";
import { notFound } from "next/navigation";
import Icon from "@/components/icon";

export const revalidate = 10;

const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(`http://localhost:3000/api/tasks/${params.id}`, {
    method: "GET",
    cache: "no-store",
  });

  const task: Task = await data.json();
  if (!task) {
    notFound();
  }

  return (
    <div
      className={`flex flex-col space-y-3 justify-between bg-card p-5 rounded-sm shadow-xl max-h-96 overflow-auto border border-tertiary
  ${styles.example}`}
    >
      <div className="flex justify-between">
        <div className="flex justify-between bg-card space-x-1">
          <div className="flex flex-col space-y-0">
            <TypographyLarge text={task?.title} />
            <TypographyMuted
              text={new Intl.DateTimeFormat("default", {
                month: "long",
                day: "2-digit",
              }).format(new Date(task?.created_at!))}
            />
          </div>

          <Icon
            name="CheckCircle"
            color={task?.isCompleted ? "green" : "red"}
            size={18}
            className="mt-1"
          />
        </div>

        <Icon name="Pencil" size={20} />
      </div>

      <TypographyP text={task?.description} />
    </div>
  );
};

export default page;
