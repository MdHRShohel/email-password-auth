import { getAuth } from 'firebase/auth';
import app from './firebase/firebase.init';
import Register from './components/Register';
import RegisterReactBootStrap from './components/RegisterReactBootStrap';

const auth = getAuth(app);


function App() {
  return (
    <div>
      <h1 className='w-50 mx-auto'>React Firebase Auth</h1>
      <RegisterReactBootStrap></RegisterReactBootStrap>

      {/* <Register></Register> */}
    </div>
  );
}

export default App;
