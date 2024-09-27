import React from "react"

type Props = {
  name: string
  email: string
  getEmail: (e: string) => void
  getName: (e: string) => void
  writeNewUser: () => void
}

const User: React.FC<Props> = ({
  writeNewUser,
  getName,
  getEmail,
  name,
  email,
}) => {
  return (
    <div className="add__user">
      <h2>Добавление пользователя</h2>
      <input
        type="text"
        className="name"
        value={name}
        placeholder="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getName(e.target.value)
        }}
      />
      <input
        type="text"
        className="email"
        value={email}
        placeholder="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          getEmail(e.target.value)
        }
      />
      <button onClick={writeNewUser}>Добавить</button>
    </div>
  )
}

export default User
