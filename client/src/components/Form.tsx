import React, { useState } from "react"

interface Props {
  createTodo: (todo: string) => void
}

const Form: React.FC<Props> = ({ createTodo }) => {
  const [value, setValue] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTodo(value)
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
        placeholder="What task do you have today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-500 border-none p-2 text-white cursor-pointer rounded ml-2 w-[100px] h-[58px]">
        Add Task
      </button>
    </form>
  )
}

export default Form
