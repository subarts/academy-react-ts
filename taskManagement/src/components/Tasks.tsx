import { useState } from "react"

const Tasks = () => {
  interface task {
    id: number
    title: string
    completed: boolean
  }
  const [tasks, setTasks] = useState<task[]>([])
  const arr: task[] = [
    { id: 1, title: "lol", completed: false },
    { id: 2, title: "lol", completed: false },
    { id: 3, title: "lol", completed: false },
    { id: 4, title: "lol", completed: true },
  ]
  return (
    <div>
      {arr.map((el) => {
        return (
          <ul className="tasks" key={el.id}>
            <li>{el.id}</li>
            <li>{el.title}</li>
            <li>{el.completed ? "выполнена" : "не выполнена"}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Tasks
