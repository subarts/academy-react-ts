import { useState } from "react"
interface task {
  id: number
  title: string
  completed: boolean
}

const Category = (category) => {
  const [tasks, setTasks] = useState<task[]>([])
  const [title, setTitle] = useState<string>("")

  return (
    <ul className="category" key={category.id}>
      <li>{category.id}</li>
      <li>{category.name}</li>

      {tasks.map((el) => {
        return (
          <ul className="tasks" key={el.id}>
            <li>{el.id}</li>
            <li>{el.title}</li>
            <li>{el.completed ? "выполнена" : "не выполнена"}</li>
          </ul>
        )
      })}
    </ul>
  )
}

export default Category
