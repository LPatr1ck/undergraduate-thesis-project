import { useState } from "react";
import "./MailList.css";

const MailList = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubscribed(true)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="Mail">
      <h1 className="MailTitle">Banul economisit este de două ori câştigat.</h1>
      <span className="MailDescription">
        Aboneaza-te la Newsletter si primesti oferte pe placul tau.
      </span>
      {!isSubscribed && (
        <div className="MailInputContainer">
          <form onSubmit={handleSubmit}>
            <input className="MailInputContainerSearch" 
              type="email"
              placeholder="Email-ul dumneavoastra.."
              value={email}
              onChange={handleEmailChange}
            />
            <button className="MailInputContainer">Aboneaza-te</button>
          </form>
        </div>
      )}
      {isSubscribed && (
        <div className="MailSuccessContainer">
          <p>Email-ul catre {email} a fost trimis. Multumim pentru abonare!</p>
        </div>
      )}
    </div>
  )
}

export default MailList;
