interface Task {
  id: number | null;
  title: string;
  description: string;
  isCompleted: boolean;
  created_at: Date | null;
  updated_at: Date | null;
}

interface Card {
  task: Task;
  buttons: Button[];
  handleClick?: () => void;
}

interface Description {
  desc: string;
}

interface FormModal {
  id?: number;
  handleClose: () => void;
}

interface DetailsForm {
  id: number | null;
  handleClose: () => void;
}

interface ConfirmModal {
  handleConfirm: (value?: any) => void;
  handleClose: () => void;
  confirmText: string;
}

interface Button {
  name: string;
  handleClick?: (value: any) => void;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

interface AddTodo {
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
}
