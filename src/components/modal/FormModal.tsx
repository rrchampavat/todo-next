"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Icon from "../icon";
import { getTask, updateTask } from "@/lib/tasks";
import styles from "./style.module.css";
import { Textarea } from "../ui/TextArea";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { TypographyH4 } from "../ui/Typography";

interface Task {
  title: string;
  desc: string;
  isCompleted: boolean;
}

const FormModal = (props: FormModal) => {
  const { handleClose, id } = props;
  const router = useRouter();

  const [task, setTask] = useState<Task>({
    title: "",
    desc: "",
    isCompleted: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleCheckbox = () => {
    setTask({ ...task, isCompleted: !task.isCompleted });
  };

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await getTask(id!);
        setTask({
          title: data?.title,
          desc: data?.description,
          isCompleted: data?.isCompleted,
        });
      })();
    }
  }, [id]);

  const handleUpdate = async () => {
    await updateTask({
      id,
      title: task.title,
      desc: task.desc,
      isCompleted: task.isCompleted,
    });
    handleClose();
  };

  return (
    <div className="flex fixed justify-between flex-col items-start z-50 top-28 left-0 right-0 m-auto bg-background border border-primary p-5 rounded-sm shadow-xl w-5/6 space-y-2">
      <div className="flex w-full justify-between">
        <TypographyH4 text="Update Task" />
        <Button
          type="button"
          className="bg-background drop-shadow-none  p-0 h-auto rounded-full"
          onClick={handleClose}
        >
          <Icon name="XCircle" color="red" />
        </Button>
      </div>

      <div className="flex flex-col space-y-5 ">
        <div className="flex flex-col text-left space-y-1">
          <Label htmlFor="title">Task Name</Label>
          <Input
            name="title"
            type="text"
            className="border border-t-0 border-l-0 border-r-0 border-b-foreground bg-background  rounded-sm p-1"
            onChange={handleChange}
            value={task.title}
            required
          />
        </div>

        <div className="flex flex-col text-left space-y-1">
          <Label htmlFor="desc">Description</Label>
          <Textarea
            name="desc"
            className={`border border-t-0 border-l-0 border-r-0 border-b-foreground bg-background rounded-sm  p-1 w-full h-32 ${styles.example}`}
            onChange={handleChange}
            value={task.desc}
            required
          />
        </div>

        {id && (
          <div className="flex item-center space-x-2">
            <Label htmlFor="isCompleted">Completed ?</Label>
            <input
              type="checkbox"
              name="isCompleted"
              checked={task.isCompleted}
              onChange={handleCheckbox}
            />
          </div>
        )}
      </div>

      <Button
        type="submit"
        className="bg-foreground drop-shadow-2xl mx-auto"
        onClick={handleUpdate}
      >
        Update
      </Button>
    </div>
  );
};

export default FormModal;
