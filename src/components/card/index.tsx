"use client";

import Icon from "../icon";
import styles from "./style.module.css";
import { TypographyH4, TypographyMuted, TypographyP } from "../ui/Typography";
import { useRouter } from "next/navigation";

const Card = (props: Card) => {
  const { task } = props;

  const { id, title, description, isCompleted, created_at } = task;

  const router = useRouter();

  return (
    <div
      className="shadow-lg hover:shadow-2xl hover:scale-105 bg-card p-5 my-2 md:m-2  rounded-md ease-in duration-200 max-h-62"
      onClick={() => router.push(`/tasks/${id}`)}
    >
      <div className="flex justify-between">
        <div className="flex items-top space-x-2">
          <div className="flex flex-col space-y-0">
            <TypographyH4 text={title} />
            <TypographyMuted
              text={new Intl.DateTimeFormat("default", {
                month: "long",
                day: "2-digit",
              }).format(new Date(created_at!))}
            />
          </div>

          <Icon
            name="CheckCircle"
            color={isCompleted ? "green" : "red"}
            size={18}
            className="mt-1"
          />
        </div>

        <Icon name="Pencil" />
      </div>

      <TypographyP text={description} className={styles.description} />
    </div>
  );
};

export default Card;
