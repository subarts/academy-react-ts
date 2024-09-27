import { useState } from "react"
import Tasks from "./Tasks"
import Category from "./Category"
interface task {
  id: number
  title: string
  completed: boolean
}
interface category {
  id: number
  name: string
  tasks: task[]
}

let taskId: number = 1
let select: string = ""
const Categories = () => {
  const [categories, setCategories] = useState<category[]>([])
  const [category, setcategory] = useState<string>("")
  const [categoryId, setCategoryId] = useState<number>(0)
  /* добавление категории */
  function addCategory(): void {
    const newCategory: category = {
      id: categoryId,
      name: category,
      tasks: [],
    }

    setCategories([...categories, newCategory])
    clearInput()
    setCategoryId(categoryId + 1)
  }
  function clearInput() {
    setcategory("")
  }

  function getName(name: string): void {
    setcategory(name)
  }
  /* добавление задачи */
  const [tasks, setTasks] = useState<task[]>([])
  const [title, setTitle] = useState<string>("")

  function addTask(): number {
    const newTask: task = {
      id: taskId + 1,
      title,
      completed: false,
    }
    /*  console.log(categories[taskIndex].tasks.push(newTask))
    console.log(categories) */

    setTasks([...tasks, newTask])
    return (taskId += 1)
  }
  function getTitle(title: string): void {
    setTitle(title)
  }

  return (
    <section className="categories">
      <div>
        <input
          type="text"
          placeholder="category name"
          onChange={(e) => getName(e.target.value)}
          value={category}
        />
        <button onClick={addCategory}>Добавить категорию</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => getTitle(e.target.value)}
          value={title}
        />
        <button onClick={addTask}>Добавить таску</button>
      </div>
      <select
        name="select"
        id="select"
        onChange={(e) => (select = e.target.value)}
      >
        {categories.map((el, index) => {
          return (
            <option value={el.name} key={index}>
              {el.name}
            </option>
          )
        })}
      </select>
      {categories.map((el) => {
        return <Category {...el} key={el.id} />
      })}
      {/* {categories.map((el) => {
        return (
          <ul className="category" key={el.id}>
            <li>{el.id}</li>
            <li>{el.name}</li>
            <div>
              {tasks.map((el) => {
                return (
                  <ul className="tasks" key={el.id}>
                    <li>{el.id}</li>
                    <li>{el.title}</li>
                    <li>{el.completed ? "выполнена" : "не выполнена"}</li>
                  </ul>
                )
              })}
            </div>
          </ul>
        )
      })} */}
    </section>
  )
}

export default Categories
