import React, { useState } from "react"
import { Props, MessageForm } from "../types"
const SendMessage: React.FC<Props> = ({ ws }) => {
  const [message, SetMessage] = useState<string>("")

  function send(): void {
    const messageData: MessageForm = {
      type: "message",
      message,
    }
    ws.send(JSON.stringify(messageData))
    clearMessage()
  }
  function clearMessage(): void {
    SetMessage("")
  }

  return (
    <>
      <textarea
        value={message}
        name="textarea"
        id="message"
        placeholder="message"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          SetMessage(e.target.value)
        }
      />
      <button className="message__button" type="button" onClick={send}>
        отправить
      </button>
    </>
  )
}

export default SendMessage
