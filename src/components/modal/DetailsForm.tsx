"use client";

import React, { useEffect, useState } from "react";
import Icon from "../icon";
import { getTask } from "@/lib/tasks";
import styles from "./style.module.css";
import { TypographyLarge, TypographyP } from "../ui/Typography";

const initialState = {
  id: null,
  title: "",
  description: "",
  isCompleted: false,
  created_at: null,
  updated_at: null,
};

const DetailsForm = (props: DetailsForm) => {
  const { handleClose, id } = props;

  const [task, setTask] = useState<Task>(initialState);

  useEffect(() => {
    (async () => {
      const data = await getTask(id!);
      // @ts-expect-error
      setTask(data);
    })();
  }, [id]);

  return (
    <div
      className={`flex flex-col space-y-3 w-5/6 fixed justify-between items-start z-50 top-28 left-0 right-0 m-auto bg-background p-5 rounded-sm shadow-xl max-h-96 overflow-auto border border-tertiary
      ${styles.example}`}
    >
      <div className="flex justify-between w-full h-10 sticky top-0 bg-background">
        <TypographyLarge text={task?.title} />

        <button
          data-modal-hide="defaultModal"
          type="button"
          onClick={handleClose}
        >
          <Icon name="XCircle" color="red" />
        </button>
      </div>

      <TypographyP text={task?.description} />
    </div>
  );
};

export default DetailsForm;
