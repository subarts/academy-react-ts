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
  function editUser(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement
    const id: number = +target.parentNode.firstChild.textContent
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
  function deleteUser(e: React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement
    const deleteId: number = +target.parentNode.firstChild.textContent
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
