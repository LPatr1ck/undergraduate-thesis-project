import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })

  const { user, loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const navigateToRegister = () => {
    navigate('/Register')
  }

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/Login", credentials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  }

  console.log(user)

  return (
    <div className="backgroundLogin">
      <div className="login">
        <h2 className="registertext">Bine ai revenit pe <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logotext">Book&Go</span>
        </Link></h2>
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput" />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput" />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
          <button className="linkButtonLogin" onClick={navigateToRegister}>Nu ai un cont? Inregistreaza-te aici.</button>
        </div>
        <div className="FooterText">Toate drepturile rezervate. Copyright © 2023 Book and Go.</div>
      </div>
    </div>
  )
}

export default Login;