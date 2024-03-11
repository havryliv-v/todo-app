import React, { useState } from "react"
import Form from "./Form.tsx"
import { v4 as uuidv4 } from "uuid"
import Todo from "./Todo.tsx"
import Edit from "./Edit.tsx"
uuidv4()

interface TodoItem {
  id: string
  task: string
  isEditing: boolean
}

const TodoList = () => {
  const [todoValue, setTodoValue] = useState<TodoItem[]>([])

  const createTodo = (todo: string) => {
    setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
  }

  const deleteTodo = (id: string) => {
    console.log(typeof id)
    setTodoValue(todoValue.filter((todo) => todo.id !== id))
  }

  const editTodo = (id: string) => {
    setTodoValue(
      todoValue.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      })
    )
  }
  const editTask = (task: string, id: string) => {
    console.log(typeof task)
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    )
  }
  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md w-[500px] ">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, id) =>
        todo.isEditing ? (
          <Edit key={id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  )
}

export default TodoList
