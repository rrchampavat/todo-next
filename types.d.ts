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

interface TextInput {
  name: string;
  label?: string;
  labelClass?: string;
  className?: string;
  placeHolder?: string;
  value?: any;
  disabled?: boolean;
  required?: boolean;
  handleChange?: () => void;
}

interface TextArea {
  name: string;
  className?: string;
  placeHolder?: string;
  disabled?: boolean;
  value?: any;
  required?: boolean;
  handleChange?: () => void;
}
