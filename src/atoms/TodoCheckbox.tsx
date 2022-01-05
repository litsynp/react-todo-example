import { useEffect, useState } from 'react';

interface TodoCheckboxProps {
  completed: boolean;
  onToggle: () => void;
}

const TodoCheckbox = ({ completed, onToggle }: TodoCheckboxProps) => {
  const getCompleteIcon = (completed: boolean) => (completed ? 'x' : ' ');
  const [completeIcon, setCompleteIcon] = useState(getCompleteIcon(completed));

  const onToggleCheckbox = () => {
    onToggle();
    setCompleteIcon(getCompleteIcon(completed));
  };

  return (
    <span
      className="flex justify-between w-10 cursor-pointer select-none mr-3"
      onClick={onToggleCheckbox}
    >
      <span>[</span>
      <span>{completeIcon}</span>
      <span>]</span>
    </span>
  );
};

export default TodoCheckbox;
