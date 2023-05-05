"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { TypographyH4, TypographyLarge } from "@/components/ui/Typography";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const Form = ({ data }: { data: Task }) => {
  const router = useRouter();

  const [task, setTask] = useState<Task>(data);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const data = await fetch(`/api/tasks/${task?.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsLoading(false);

    if (data.ok) {
      router.push("/");
    }
  };

  return (
    <div className="w-full flex flex-col mx-auto items-center space-y-5 p-4 shadow-2xl md:w-1/3 rounded-sm bg-card">
      <TypographyLarge text="Update Task" />
      <div className="flex flex-col w-3/4">
        <TypographyH4 text="Title" />
        <Input
          type="text"
          name="title"
          value={task?.title}
          className="border-t-0 border-l-0 border-r-0 border border-b-primary bg-input"
          required
          onChange={handleChange}
        />
      </div>

      <div className="w-3/4">
        <TypographyH4 text="Description" />
        <Textarea
          name="description"
          value={task?.description}
          className="w-full border border-b-primary border-t-0 border-l-0 border-r-0 bg-input"
          required
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-1">
        <TypographyH4 text="Completed ?" />
        <input
          type="checkbox"
          className="accent-foreground"
          checked={task?.isCompleted}
          onChange={() => setTask({ ...task, isCompleted: !task.isCompleted })}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="bg-foreground shadow-2xl"
        onClick={handleSubmit}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Update
      </Button>
    </div>
  );
};

export default Form;
