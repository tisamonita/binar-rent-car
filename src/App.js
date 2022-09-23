import React from 'react';
import './App.css';
import Balance from './component/balances';
import SignupForm from './component/register';
import LoginForm from './component/login';
import AllCars from './component/allCars';
import ImageExample from './component/example-modal-image';
import PdfDua from './component/example-pdf-2';
import Dashboard from './component/dashboard';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <> 
      <Routes>
      <Route path='/'>
          <Route index element={<>Index</>} />
          <Route path='redux'>
            <Route index element={<Balance />} />
          </Route>
          <Route path='signup' element={<SignupForm/>} />
          <Route path='login' element={<LoginForm/>} />
          <Route path='allCars' element={<AllCars/>} />
          <Route path='img-example' element={<ImageExample />} />
          <Route path='pdf-example' element={<PdfDua/>} />
          <Route path='dashboard' element={<Dashboard/>} />
        </Route>
        <Route path='*' element={<>Not Found</>} />
      </Routes>
      {/* // eslint-disable-line */}
    </>

  );
}

export default App;
