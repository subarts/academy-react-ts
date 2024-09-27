interface User {
  id: number
  name: string
  email: string
}

type Props = {
  users: User[]
  editUser: (
    e: React.MouseEvent<Element, MouseEvent> & { target: HTMLButtonElement }
  ) => void
  deleteUser: (
    e: React.MouseEvent<Element, MouseEvent> & { target: HTMLButtonElement }
  ) => void
}

const Users: React.FC<Props> = ({ users, editUser, deleteUser }) => {
  const usersList = users.map((user: User) => {
    return (
      <div key={user.id} className="user">
        <ul>
          <li className="user__id">{user.id}</li>
          <li className="user__name">name:{user.name}</li>
          <li className="user__email">email:{user.email}</li>
        </ul>
        <div className="user__buttons">
          <button onClick={deleteUser}>удалить</button>
          <button onClick={editUser}>редактировать </button>
        </div>
      </div>
    )
  })
  return (
    <>
      <h2>Список пользователей</h2>
      <div className="users">{usersList}</div>
    </>
  )
}

export default Users
