import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';


//Components
import Navbar from './Components/NavBar';
import Landing from './Components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/" component={Landing} />
    </BrowserRouter>

  );
}

export default App;
