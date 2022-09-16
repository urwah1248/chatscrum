import React from 'react'
import './App.css';
import SignUp from './components/signup/files/signup';
import SignIn from './components/signin/files/signin';

class App extends React.Component{
  render() {
    return(
      <div className="App">
        <div className="header">
          <h1>ChatScrum</h1>
        </div>
        
        <SignUp />
        <SignIn />
      </div>
    )
  }
}

export default App;
