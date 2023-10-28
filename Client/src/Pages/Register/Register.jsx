import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContext } from "../../context/RegisterContext";
import "./Register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    emailError: null,
  })

  const { user, loading, error, dispatch } = useContext(RegisterContext)

  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/Login')
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));

    if (id === "email") {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const isValid = emailPattern.test(value);

      if (!isValid) {
        setCredentials((prev) => ({
          ...prev,
          emailError: "Adresa de email nu este validă.",
        }));
      } else {
        setCredentials((prev) => ({ ...prev, emailError: null }));
      }
    }
  };

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: "REGISTER_START" })
    try {
      const res = await axios.post("/auth/Register", credentials)
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data })
      navigate("/")
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data })
    }
  }

  console.log(user)

  return (
    <div className="backgroundRegister" >
      <div className="register">
        <h2 className="registertext">Bine ai venit pe <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logotext">Book&Go</span>
        </Link></h2>
        <div className="rContainer">
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="rInput" />
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="rInput"
          />
          {credentials.emailError && (
            <p className="error">{credentials.emailError}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="rInput" />
          <input
            type="telefon"
            placeholder="Telefon"
            id="telefon"
            onChange={handleChange}
            className="rInput" />
          <input
            type="tara"
            placeholder="Tara"
            id="tara"
            onChange={handleChange}
            className="rInput" />
          <input
            type="oras"
            placeholder="Oras"
            id="oras"
            onChange={handleChange}
            className="rInput" />
          <button disabled={loading} onClick={handleClick} className="rButton">
            Register
          </button>
          {error && <span>{error.message}</span>}
          <button className="linkButtonRegister" onClick={navigateToLogin}>Ai deja cont? Logheaza-te aici.</button>
        </div>
        <div className="FooterText">Toate drepturile rezervate. Copyright © 2023 Book and Go.</div>
      </div>
    </div>
  )
}

export default Register;