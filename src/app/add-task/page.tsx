import React from "react";

const Add = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div>Add New Task</div>
      <div className="flex flex-col">
        <label>Title</label>
        <div className="border border-b-secondary border-t-0 border-l-0 border-r-0">
          <input placeholder="Title" />
        </div>
      </div>

      <div>
        <label>Description</label>
        <div className="border border-b-secondary border-t-0 border-l-0 border-r-0">
          <textarea placeholder="Description" />
        </div>
      </div>
    </div>
  );
};

export default Add;
