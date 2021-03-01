import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' component={Signup}/>
        <Route path='/signin' component={Signin}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
