import { useContext } from "react";
import "./NavigationBar.css";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const NavigationBar = () => {

  const { user, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/Login')
  }

  const navigateToRegister = () => {
    navigate('/Register')
  }

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGOUT" })
    try {
      navigate("/")
    } catch (err) {

    }
  }

  return (
    <div className="NavBar">
      <div className="NavContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="Logo"><img className="Img" src="/Assets/Images/Logo2.png" />Book And Go</span>
        </Link>
        {user ? (
          <>
            <div>{user.username}</div>
            <button className="NavButton" onClick={handleClick}>Logout</button>
          </>
        ) : (
          <div className="NavItems">
            <button onClick={navigateToRegister} className="NavButton">Register</button>
            <button onClick={navigateToLogin} className="NavButton">Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavigationBar