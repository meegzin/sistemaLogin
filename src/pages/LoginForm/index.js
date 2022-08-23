import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./style";
import { useNavigate } from "react-router-dom";
import useAuthenticator from "../../hooks/useAuthenticator";

const Login = () => {

  const { login } = useAuthenticator()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const validateLogin = () => {
    if (!username | !password) {
      setError("Preencha todos os campos")
      return;
    }

    const res = login(username, password)

    if (res) {
      setError(res)
      return;
    }

    navigate("/AdminPage")
  }


  return (
    <C.Container>
      <C.Label>BEM VINDO ADM</C.Label>
      <C.Content>
        <Input 
          type="text"
          placeholder="Digite seu username"
          value={username}
          onChange={(e) => [setUsername(e.target.value), setError("")]} />
        <Input 
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]} />    
          <C.labelError>{error}</C.labelError>    
          <Button Text="Login" onClick={validateLogin} />
      </C.Content>
    </C.Container>
  )
}

export default Login