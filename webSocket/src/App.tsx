import "./App.css"
import Connect from "./components/Connect"
import Disconnect from "./components/Discconect"
import Receipt from "./components/Receipt"
import Registration from "./components/Registration"
import SendMessage from "./components/SendMessage"

function App() {
  const ws: WebSocket = new WebSocket("ws://localhost:8080")

  return (
    <>
      <Registration ws={ws} />
      <Connect ws={ws} />
      <Receipt ws={ws} />
      <SendMessage ws={ws} />
      <Disconnect ws={ws} />
    </>
  )
}

export default App
