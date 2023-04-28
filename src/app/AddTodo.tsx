import Icon from "@/components/icon";
import FormModal from "@/components/modal/FormModal";
import React from "react";

const AddTodo = (props: AddTodo) => {
  const { handleClose, handleOpen, open } = props;

  return (
    <div className="w-full fixed bottom-0 mb-5 flex justify-end">
      <button
        className="border border-secondary bg-secondary px-2 py-1 mr-5 rounded-sm shadow-xl hover:scale-105 duration-300"
        type="button"
        onClick={handleOpen}
      >
        <div className="flex text-primary font-semibold">
          <Icon name="Plus" className="mr-2" color="#F1F6F9" />
          Add
        </div>
      </button>
      {open && <FormModal handleClose={handleClose} />}
    </div>
  );
};

export default AddTodo;
