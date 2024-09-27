import { useState } from "react"
import "./App.css"
import Categories from "./components/Categories"

let taskId: number = 0
let categoryId: number = 0

function App() {
  interface task {
    id: number
    title: string
    completed: boolean
  }
  interface category {
    id: number
    name: string
    tasks: task[]
  } /* 
  const [categories, setCategories] = useState<category[]>([])
  const [tasks, setTasks] = useState<task[]>([]) */
  return (
    <>
      <Categories />
    </>
  )
}

export default App
/* 
Задание: Создание Компонента для Управления Задачами по Категориям
Цель: разработать компонент, который позволяет пользователям создавать различные категории задач и управлять задачами в этих категориях.
#### Шаги выполнения:
1. Создайте основной компонент TaskManager.
2. Создайте интерфейсы для задачи (Task) и категории (Category).
  - Интерфейс для задачи должен содержать:
   - id: number: уникальный идентификатор задачи.
   - title: string: заголовок задачи.
   - completed: boolean: статус завершенности задачи.
  - Интерфейс для категории:
   - id: number: уникальный идентификатор категории.
   - name: string: название категории.
   - tasks: Task[]: массив задач, относящихся к этой категории.
3. Создайте массив categories в состоянии
4. Создайте функции для добавления, редактирования и удаления категорий и задач:
  - addCategory: добавляет новую категорию.
  - removeCategory: удаляет существующую категорию.
  - addTask: добавляет задачу в выбранную категорию.
  - editTask: редактирует существующую задачу.
  - removeTask: удаляет задачу из категории.
  - toggleTaskCompletion: меняет статус завершенности задачи.
5. Создайте интерфейс для отображения категорий и связанных с ними задач.
6. Добавьте форму для добавления новых категорий и задач.

 */
