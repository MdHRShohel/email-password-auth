import {getAuth} from 'firebase/auth';
import {app} from './firebase/firebase.init';
import './App.css';

const auth = getAuth(app);


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
