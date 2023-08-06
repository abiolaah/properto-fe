import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  
  return (
    <>
   
    <Router>

   
      <Routes>
      <Route path="/" exact element={ <Home></Home>} />
      </Routes>

      <Routes>
      <Route path="/login" exact element={<Login></Login>} />
      </Routes>
     
      
      <Routes>
      <Route path="/register" exact element={<Register></Register>} />
      </Routes>
    
  </Router>

    
    </>
  );
}

export default App;
