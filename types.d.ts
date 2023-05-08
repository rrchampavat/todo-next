interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  created_at: Date;
  updated_at: Date;
}

interface Card {
  task: Task;
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

interface Accordion {
  value: string | number | null;
  title: string;
  description: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
  date?: Date | string;
  btnTxt?: string;
  handleClick?: () => void;
  id?: string | number | null;
  icon?: string;
  iconClr?: string;
}

interface AlertMsg {
  description: string;
  title?: string;
  variant?: "destructive" | "default";
}

interface Description {
  desc: string;
}

interface Card {
  title: string;
  content: string;
  id: number;
  description?: string | number;
  footer?: string;
  btnTxt?: string;
  btnType?: "submit" | "button";
  icon?: string;
  icnClr?: string;
  icnSize?: number;
  handleClick?: (value?: any) => void;
  task?: Task;
}

interface TaskForm {
  title: string;
  description: string;
}

interface GetByIdPayload {
  id: number | string;
  table: string;
}

interface UpdatePayload {
  body: any;
  id: number | string;
  table: string;
}
