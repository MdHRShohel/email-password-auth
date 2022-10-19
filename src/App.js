// import { getAuth } from 'firebase/auth';
// import app from './firebase/firebase.init';
// import Register from './components/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import LoginBootstrap from './components/LoginBootstrap';
import RegisterReactBootStrap from './components/RegisterReactBootStrap';
// const auth = getAuth(app);
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootStrap></RegisterReactBootStrap>,
      },
      {
        path: '/register',
        element: <RegisterReactBootStrap></RegisterReactBootStrap>,
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>,
      },

    ]
  }
 ])

function App() {
  return (
    <div>
      <h1 className='w-50 mx-auto'>React Firebase Auth</h1>
      
      <RouterProvider router={router}></RouterProvider>


      {/* <RegisterReactBootStrap></RegisterReactBootStrap> */}

      {/* <Register></Register> */}
    </div>
  );
}

export default App;
