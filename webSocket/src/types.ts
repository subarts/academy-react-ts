type Props = {
  ws: WebSocket
}
type AuthForm = {
  type: string
  username: string
  password: string
}
type RegistData = {
  type: string
  username: string
  password: string
}
type MessageForm = {
  type: "message"
  message: string
}
type MessageData = {
  sender: string
  message: string
  error?: string
}
type SignUp = {
  type: "register"
  success: boolean
  error?: string
}
type Auth = {
  type: "auth"
  success: boolean
  error?: string
}
export type {
  Props,
  AuthForm,
  RegistData,
  MessageForm,
  MessageData,
  SignUp,
  Auth,
}
