"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Icon from "../icon";
import { addTask, getTask, updateTask } from "@/lib/tasks";

import styles from "./style.module.css";
import { useRouter } from "next/navigation";

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

  const handleSubmit = async () => {
    if (!task.title || !task.desc) {
      alert("Please provide all the required values!");
      return;
    }
    await addTask(task);
    handleClose();
    router.refresh();
  };

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
    <div className="flex fixed justify-between flex-col items-start z-50 top-28 left-0 right-0 m-auto bg-primary p-5 rounded-sm shadow-xl w-96 space-y-2">
      <div className="flex w-full justify-between">
        {id ? "Update" : "Add"} Task
        <button
          data-modal-hide="defaultModal"
          type="button"
          onClick={handleClose}
        >
          <Icon name="XCircle" color="red" />
        </button>
      </div>

      <div className="flex flex-col space-y-5 ">
        <div className="flex flex-col text-left">
          <label>Task Name</label>
          <div className="border-secondary border-solid">
            <input
              name="title"
              type="text"
              className="border border-tertiary rounded-sm drop-shadow-xl p-1 example"
              onChange={handleChange}
              value={task.title}
              required
            />
          </div>
        </div>
        <div className="flex flex-col text-left">
          <label>Description</label>
          <div className="border-secondary border-solid">
            <textarea
              name="desc"
              className={`border border-tertiary rounded-sm drop-shadow-xl p-1 w-full h-32 ${styles.example}`}
              onChange={handleChange}
              value={task.desc}
              required
            />
          </div>
        </div>
        {id && (
          <div className="flex space-x-2">
            <label>Completed ?</label>
            <input
              type="checkbox"
              name="isCompleted"
              checked={task.isCompleted}
              onChange={handleCheckbox}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-secondary text-primary w-1/4 rounded-sm py-0.5 drop-shadow-xl mx-auto"
        onClick={id ? handleUpdate : handleSubmit}
      >
        {id ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default FormModal;
