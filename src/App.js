import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}

const handleEmailBlur = (event) => {
  console.log(event.target.value);
}

const handlePasswordBlur = (event) => {
  console.log(event.target.value);
}


function App() {
  return (
    <div className="App">
      <h1>React Firebase Auth</h1>
      <form onSubmit={handleRegister}>
        <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Email" />
        <br />
        <input  onBlur={handlePasswordBlur}  type="password" name='password' placeholder="Password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
