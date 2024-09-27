import { useState } from "react"
import "../style/userManagement.css"
import Users from "./Users"
import User from "./User"
let lastId: number = 0
const UserManagement = () => {
  interface User {
    id: number
    name: string
    email: string
  }

  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  function getName(name: string) {
    setName(name)
  }
  function getEmail(email: string) {
    setEmail(email)
  }

  /* добавление юзера */
  function addUser(name: string, email: string): number {
    const newId: number = lastId + 1
    const newUser: User = {
      id: newId,
      name,
      email,
    }
    setUsers([...users, newUser])
    return (lastId = newId)
  }

  function writeNewUser(): void {
    addUser(name, email)
    clearInputs()
  }
  /* правка юзера */
  function editUser(
    e: React.MouseEvent<Element, MouseEvent> & { target: HTMLButtonElement }
  ): void {
    clearInputs()
    const target = e.target?.parentNode?.firstChild?.textContent
    let id: number = 0
    if (typeof target === "string") {
      id = +target
    }
    clearInputs()
    setUsers(
      users.map((el) => {
        if (el.id == id) {
          el.name = name.length !== 0 ? name : el.name
          el.email = email.length !== 0 ? email : el.email
        }
        return el
      })
    )
  }

  /* удаление юзера */
  function deleteUser(
    e: React.MouseEvent<Element, MouseEvent> & { target: HTMLButtonElement }
  ): void {
    const target = e.target?.parentNode?.firstChild?.textContent
    let deleteId: number = 0
    if (typeof target === "string") {
      deleteId = +target
    }

    setUsers(users.filter((el) => el.id !== deleteId))
  }
  const usersProps = { users, editUser, deleteUser }

  function clearInputs(): void {
    setName("")
    setEmail("")
  }

  return (
    <section>
      <User
        writeNewUser={writeNewUser}
        getName={getName}
        getEmail={getEmail}
        name={name}
        email={email}
      />

      <Users {...usersProps} />
    </section>
  )
}

export default UserManagement
