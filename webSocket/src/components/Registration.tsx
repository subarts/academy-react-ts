import { useState } from "react"
import { Props, RegistData } from "../types"
const Registration: React.FC<Props> = ({ ws }) => {
  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  /* регистрация */
  function registerUser(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    const registerUser: RegistData = {
      type: "register",
      username: userName,
      password,
    }
    ws.send(JSON.stringify(registerUser))

    clearInputs()
  }
  function clearInputs(): void {
    setUserName("")
    setPassword("")
  }

  return (
    <form id="register" className="regCon" onSubmit={registerUser}>
      <input
        type="text"
        placeholder="name"
        className="user"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
      />
      <input
        type="password"
        placeholder="password"
        className="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button type="submit" className="register__button">
        регистрация
      </button>
    </form>
  )
}

export default Registration
