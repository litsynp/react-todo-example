import React, { useCallback, useState } from 'react';

interface NewTodoInputBoxProps {
  onSubmit: (text: string) => void;
}

const NewTodoInputBox = ({ onSubmit }: NewTodoInputBoxProps) => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState('');

  const onClick = useCallback(() => {
    setClicked(!clicked);
  }, [clicked]);

  const onClickAdd = useCallback(() => {
    if (input !== '') {
      setClicked(false);
      setInput('');
      onSubmit(input);
    } else {
      alert('Please enter something!');
    }
  }, [clicked, input, onSubmit]);

  const onClickCancel = useCallback(() => {
    setClicked(false);
    setInput('');
  }, [clicked, input]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDownOnTodo = useCallback(
    (e: React.KeyboardEvent<any>) => {
      switch (e.key) {
        case 'Enter':
          onClickAdd();
          break;
        case 'Esc':
        case 'Escape':
          onClickCancel();
          break;
        default:
      }
    },
    [onClickAdd, onClickCancel],
  );

  return (
    <>
      {clicked ? (
        <div
          className="flex items-center align-middle break-all text-xl border-2 rounded border-blue-500 text-gray-700 cursor-pointer p-2 my-4"
          onKeyDown={handleKeyDownOnTodo}
        >
          <span className="text-blue-500 mr-1" onClick={onClickAdd}>
            +
          </span>
          <input
            autoFocus
            type="text"
            className="w-full outline-none p-1 mr-1"
            placeholder="Create a new todo!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="text-blue-500" onClick={onClickCancel}>
            x
          </span>
        </div>
      ) : (
        <div
          className="flex align-middle break-all text-xl border-2 rounded border-gray-500 text-gray-500 cursor-pointer px-2 py-3 my-4"
          onClick={onClick}
        >
          + New Todo
        </div>
      )}
    </>
  );
};

export default React.memo(NewTodoInputBox);
