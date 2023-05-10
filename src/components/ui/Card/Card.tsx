"use client";

import Icon from "@/components/icon";
import {
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { updateDataClient } from "@/lib/helper";

const Card = (props: Card) => {
  const {
    title,
    description,
    content,
    footer,
    btnTxt,
    handleClick,
    btnType,
    icon,
    icnClr,
    icnSize = 20,
    id,
    task,
  } = props;

  const router = useRouter();

  const handleUpdate = async (e: FormEvent<EventTarget>) => {
    e.stopPropagation();

    const res = await updateDataClient({
      body: { ...task, isCompleted: !task?.isCompleted },
      id: task?.id!,
      table: "tasks",
    });

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <CardContainer className="drop-shadow-2xl border border-foreground">
      <div className="flex flex-col justify-between h-full">
        <div>
          <CardHeader className="flex flex-row justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </div>

            {icon && (
              <Button
                type="submit"
                className="bg-card drop-shadow-none p-0 hover:bg-card rounded-full h-auto  active:animate-ping "
                onClick={handleUpdate}
              >
                <Icon name={icon} color={icnClr} size={icnSize} />
              </Button>
            )}
          </CardHeader>

          <CardContent className="max-h-40 overflow-auto noscrollbar">
            <p>{content}</p>
          </CardContent>

          {footer && (
            <CardFooter className="mt-2">
              <p>{footer}</p>
            </CardFooter>
          )}
        </div>

        {btnTxt && (
          <CardFooter className="mt-2">
            <Button onClick={() => router.push(`/tasks/${id}`)} type={btnType}>
              {btnTxt}
            </Button>
          </CardFooter>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
