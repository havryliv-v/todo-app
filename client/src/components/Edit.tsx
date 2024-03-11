import React, { useState } from "react"

interface Task {
  id: string
  task: string
}

interface Props {
  editTodo: (task: string, id: string) => void
  task: Task
}

const Edit: React.FC<Props> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form
      className="mb-4 font-primary w-full bg-transparent  flex "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-500 border-none p-2 text-white cursor-pointer rounded ml-2 w-[100px] h-[58px]">
        Update
      </button>
    </form>
  )
}

export default Edit
