"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/AlertMsg";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { TypographyH4, TypographyLarge } from "@/components/ui/Typography";
import { addTask } from "@/lib/tasks";
import { AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface Task {
  title: string;
  description: string;
}

const Add = () => {
  const router = useRouter();

  const [task, setTask] = useState<Task>({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setShowError(false);
    if (task?.title && task?.description) {
      setIsLoading(true);

      await addTask(task);

      setIsLoading(false);
      router.push("/");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-5 p-4 shadow-2xl rounded-sm bg-card">
      <TypographyLarge text="Add New Task" />
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

      <Button
        type="submit"
        disabled={isLoading}
        className="bg-foreground shadow-2xl"
        onClick={handleSubmit}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        ADD
      </Button>

      {showError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Please proive all the required details.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Add;
