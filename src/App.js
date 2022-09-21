import React from 'react'
import './App.css';
import Home from './components/home/home';
import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';
import Scrumboard from './components/scrumboard/scrumboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/scrumboard' element={<Scrumboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
