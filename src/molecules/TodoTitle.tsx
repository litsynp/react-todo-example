import React from 'react';
import { useCallback } from 'react';

const TodoTitle = () => {
  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div
      className="text-5xl text-gray-600 underline cursor-pointer mt-5 mb-10"
      onClick={refreshPage}
    >
      <span>Plain Old Todo</span>
    </div>
  );
};

export default React.memo(TodoTitle);
