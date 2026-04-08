import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import { Suspense, lazy } from 'react';
import { Loading } from './components/ui/Loading';

import Register from './pages/Register';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';

import { Provider } from 'react-redux';
import store from './store';


import Login from './pages/Login';
import Aula from './pages/Aula/Aula';
import Layout from './hocs/Layout';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>      
        <Layout>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/reset-password' element={<ResetPassword />}/>
            <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />}/>
            <Route path='/activate/:uid/:token' element={<Activate />}/>
            <Route path='/aula/*' element={<Aula />}/>
            {/* Ruta por defecto */}
            <Route path="*" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App;
