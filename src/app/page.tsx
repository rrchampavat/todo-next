"use client";

import Card from "@/components/card";
import ConfirmModal from "@/components/modal/ConfirmModal";
import DetailsForm from "@/components/modal/DetailsForm";
import FormModal from "@/components/modal/FormModal";
import { deleteTask, getTasks } from "@/lib/tasks";
import { MouseEvent, useEffect, useState } from "react";
import AddTodo from "./AddTodo";

export default function Home() {
  const [data, setData] = useState<Task[]>([]);
  const [taskID, setTaskID] = useState<number | null>(null);
  const [openTask, setOpenTask] = useState<boolean>(false);
  const [openUpdateTask, setOpenUpdateTask] = useState<boolean>(false);
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const getData = async () => {
    const data = await getTasks();

    // @ts-expect-error
    setData(data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!openUpdateTask || !openAddModal) {
      getData();
    }
  }, [openUpdateTask, openAddModal]);

  const handleShowTask = (id: number | null) => {
    setTaskID(id);
    setOpenUpdateTask(false);
    setOpenTask(true);
  };

  const handleUpdateTask = (e: MouseEvent<HTMLElement>, id: number | null) => {
    e.stopPropagation();
    setTaskID(id);
    setOpenTask(false);
    setOpenUpdateTask(true);
  };

  const handleDeleteTask = async () => {
    await deleteTask(taskID!);
    setOpenConfirmModal(false);
    getData();
  };

  return (
    <main>
      <div className="grid grid-cols-4 place-content-between justify-between">
        {data?.map((task, id) => (
          <Card
            key={id}
            task={task}
            buttons={[
              {
                name: "Pencil",
                handleClick: (e: MouseEvent<HTMLElement>) =>
                  handleUpdateTask(e, task?.id),
              },
              {
                name: "Trash2",
                color: "Red",
                handleClick: (e: MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                  setTaskID(task?.id);
                  setOpenConfirmModal(true);
                },
              },
            ]}
            handleClick={() => handleShowTask(task?.id)}
          />
        ))}
      </div>

      <AddTodo
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
        handleOpen={() => setOpenAddModal(true)}
      />

      {openTask && (
        <DetailsForm id={taskID} handleClose={() => setOpenTask(false)} />
      )}

      {openUpdateTask && (
        <FormModal handleClose={() => setOpenUpdateTask(false)} id={taskID!} />
      )}

      {openConfirmModal && (
        <ConfirmModal
          handleConfirm={handleDeleteTask}
          handleClose={() => setOpenConfirmModal(false)}
          confirmText="Delete"
        />
      )}
    </main>
  );
}
