import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Login } from './config/component/login';
import { Fb } from './config/component/Fb';
function App() {

  return (
    <>
    <div className="Body">
        <div className='Child_rigth'>
          <div className='Contenaire'>
            <span className='title'>Sing In</span>
            <form>
              <p>Email</p>
              <input type="email" name="@gmail.con" placeholder='Your email' /><br></br>
              <p>Password</p>
              <input type="password" name="password" placeholder='Your password' /><br></br>
              <button>Sign in</button>
            </form>
            <div className='hr-left'><hr /></div> <div className='or'>or</div > 
            <Login />
            <Routes>
              <Route path='/google' element={<h1>google</h1>} />
              <Route path='/facebook' element={<Fb />} />
              <Route path='/github' element={<h1>github</h1>} />
            </Routes>
          </div>
      </div>
      <div className='Child_left'></div>
{/*       <div className='Contenaire'>
        <span className='title'>Sing In</span>
        <form>
          <input type="email" name="@gmail.con" placeholder='Your email'/>
          <input type="password" name="password" placeholder='Your password' />
        </form>
      </div> */}
    </div>
    </>
  );
}

export default App;
