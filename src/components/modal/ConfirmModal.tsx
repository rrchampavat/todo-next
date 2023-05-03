import Icon from "../icon";
import { Button } from "../ui/Button";

const ConfirmModal = (props: ConfirmModal) => {
  const { handleConfirm, handleClose, confirmText } = props;

  return (
    <div
      className={`flex fixed justify-between items-start z-50 top-28 left-0 right-0 m-auto bg-foreground p-5 rounded-sm shadow-xl w-96 space-x-2 max-h-96 overflow-auto`}
    >
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex justify-between w-full">
          <span className="w-5/6 text-background">
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
          <Button
            type="submit"
            onClick={handleConfirm}
            className="bg-red-600 p-2 rounded-sm text-secondary font-semibold"
          >
            {confirmText}
          </Button>

          <Button
            type="button"
            onClick={handleClose}
            className="bg-secondary p-2 rounded-sm text-primary font-semibold"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
