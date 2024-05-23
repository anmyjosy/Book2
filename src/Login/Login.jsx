import {useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function validateLogin() {
    if (email == "anmyjosy@gmail.com" && password == "Anmy") {
      alert("login succesful!");
      navigate("/");
    } else {
      alert("Incorrect login details!");
    }
  }


  return (
    <div className='bg'>
      <div className='logborder'>
      <h1>Login</h1>
      <div className='emailenter'>
      <input type='text' placeholder='Email'onChange={handleChangeEmail}
 value={email} required/>
      </div>
      <div className='emailenter'>
      <input type='text' placeholder='Password' value={password} onChange={handleChangePassword}
 required/>
      </div>
        <button onClick={validateLogin}>Login</button>
    </div>
      </div>
  )


  }
export default Login
