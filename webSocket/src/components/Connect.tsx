import { useState } from "react"
import { Props, AuthForm } from "../types"
const Connect: React.FC<Props> = ({ ws }) => {
  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  function login(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const authData: AuthForm = {
      type: "auth",
      username: userName,
      password,
    }
    ws.send(JSON.stringify(authData))
    clearInputs()
  }

  function clearInputs(): void {
    setUserName("")
    setPassword("")
  }
  return (
    <form id="connect" className="regCon" onSubmit={login}>
      <input
        type="text"
        placeholder="name"
        className="login"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
      />
      <input
        type="password"
        placeholder="password"
        className="pass"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button type="submit" className="login__button">
        вход
      </button>
    </form>
  )
}

export default Connect
