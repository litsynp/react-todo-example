import { useEffect, useState } from 'react'

interface TodoCheckboxProps {
  completed: boolean
  onClick: () => void
}

const TodoCheckbox = ({ completed, onClick }: TodoCheckboxProps) => {
  const [completeIcon, setCompleteIcon] = useState(' ')
  const getCompleteIcon = (completed: boolean) => (completed ? 'x' : ' ')

  useEffect(() => {
    setCompleteIcon(getCompleteIcon(completed))
  }, [completed])

  return (
    <span
      className="flex justify-between w-10 cursor-pointer select-none mr-3"
      onClick={onClick}
    >
      <span>[</span>
      <span>{completeIcon}</span>
      <span>]</span>
    </span>
  )
}

export default TodoCheckbox
