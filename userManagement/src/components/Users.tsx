interface User {
  id: number
  name: string
  email: string
}

type props = {
  users: User[]
  editUser: (e: React.SyntheticEvent) => void

  deleteUser: (e: React.SyntheticEvent) => void
}

const Users: React.FC<props> = ({ users, editUser, deleteUser }) => {
  const usersList = users.map((el: User) => {
    return (
      <div key={el.id} className="user">
        <li className="user__id">{el.id}</li>
        <li className="user__name">name:{el.name}</li>
        <li className="user__email">email:{el.email}</li>
        <button onClick={deleteUser}>удалить</button>
        <button onClick={editUser}>редактировать </button>
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
