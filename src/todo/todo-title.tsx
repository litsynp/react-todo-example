import React from 'react'

export default function TodoTitle() {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div
      className="text-5xl text-gray-600 underline cursor-pointer mt-5 mb-10"
      onClick={refreshPage}
    >
      <span>Plain Old Todo</span>
    </div>
  )
}
