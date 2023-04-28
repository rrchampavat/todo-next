import Icon from "../icon";

const ConfirmModal = (props: ConfirmModal) => {
  const { handleConfirm, handleClose, confirmText } = props;

  return (
    <div
      className={`flex fixed justify-between items-start z-50 top-28 left-0 right-0 m-auto bg-primary p-5 rounded-sm shadow-xl w-96 space-x-2 max-h-96 overflow-auto `}
    >
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex justify-between w-full">
          <span className="w-3/4">
            Are you sure you want to{" "}
            <span className="lowercase">{confirmText}</span> the task ?
          </span>
          <button
            data-modal-hide="defaultModal"
            type="button"
            onClick={handleClose}
          >
            <Icon name="XCircle" color="red" />
          </button>
        </div>

        <div className="flex justify-around">
          <button
            type="submit"
            onClick={handleConfirm}
            className="bg-red-500 p-2 rounded-sm text-primary shadow-xl font-semibold"
          >
            {confirmText}
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="bg-secondary p-2 rounded-sm text-primary shadow-xl font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
