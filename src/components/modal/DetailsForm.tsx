"use client";

import React, { useEffect, useState } from "react";
import Icon from "../icon";
import { getTask } from "@/lib/tasks";
import styles from "./style.module.css";

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
      className={`flex fixed justify-between items-start z-50 top-28 left-0 right-0 m-auto bg-primary p-5 rounded-sm shadow-xl w-96 space-x-2 max-h-96 overflow-auto ${styles.example}`}
    >
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex justify-between">
          <span>{task?.title}</span>
          <button
            data-modal-hide="defaultModal"
            type="button"
            onClick={handleClose}
          >
            <Icon name="XCircle" color="red" />
          </button>
        </div>
        <p className="max-w-xs">{task?.description}</p>
      </div>
    </div>
  );
};

export default DetailsForm;
