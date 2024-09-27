import React from "react"
import { Props } from "../types"

const Disconnect: React.FC<Props> = ({ ws }) => {
  function disconnect(): void {
    ws.close()
    console.log("Соединение закрыто")
  }
  return (
    <button type="button" className="disconnect__button" onClick={disconnect}>
      отключиться
    </button>
  )
}

export default Disconnect
