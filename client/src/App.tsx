import React from "react"
import TodoList from "./components/TodoList.tsx"

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <TodoList />
    </div>
  )
}

export default App
