import {getAuth} from 'firebase/auth';

import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      <h1>React Firebase Auth</h1>
      <form>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}

export default App;
