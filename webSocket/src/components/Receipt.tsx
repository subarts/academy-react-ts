import { useEffect, useState } from "react"
import { Props, MessageData, SignUp, Auth } from "../types"
const Receipt: React.FC<Props> = ({ ws }) => {
  const [messages, setMessages] = useState<MessageData[]>([])

  ws.onmessage = (message: MessageEvent<string>): void => {
    const data = JSON.parse(message.data)
    switch (data.type) {
      case "register": {
        const resultSignIn = data as SignUp
        if (resultSignIn.success) {
          console.log("регистрация прошла успешно")
          /* смена дисаблед кнопки отправить */
        } else {
          console.log("Ошибка регистрации, такое имя уже занято")
        }
        break
      }
      case "auth": {
        const resultAuth = data as Auth
        switch (resultAuth.success) {
          case true:
            console.log("Авторизация прошла успешно")
            break
          case false:
            console.log("Ошибка авторизации")

            break
          default:
            break
        }
        break
      }
      case "message":
        {
          const newMessage: MessageData = {
            sender: data.sender,
            message: data.message,
          }
          setMessages([...messages, newMessage])
          lastMessageScroll()
        }
        break

      default:
        break
    }
  }
  /* прокрутка чата */
  useEffect(lastMessageScroll, [messages])

  function lastMessageScroll() {
    const receipt: Element | null = document.querySelector(".receipt")
    receipt?.scrollTo(0, 99999)
  }

  return (
    <section className="receipt">
      {messages.map((el, index) => {
        return (
          <ul key={index}>
            <li>Отправитель: {el.sender}</li>
            <li>Сообщение: {el.message}</li>
          </ul>
        )
      })}
    </section>
  )
}

export default Receipt
