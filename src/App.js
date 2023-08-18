import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register"
import PropertyDetails from "./components/PropertyDetails"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from './components/Admin';
import AddHouse from './components/AddHouse';
import Edit from './components/Edit';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/home" exact element={ <Home></Home>} />
      <Route path="/login" exact element={<Login></Login>} />
      <Route path="/" exact element={<Login></Login>} />
    
      <Route path="/register" exact element={<Register></Register>} />
     
      <Route path="/houses/:id" exact element={<PropertyDetails></PropertyDetails>} />
    
      <Route path="/admin" exact element={<Admin></Admin>} />
     
      <Route path="/addhouse" exact element={<AddHouse></AddHouse>} />
     
      <Route path="/edit/:id" exact element={<Edit></Edit>} />
      </Routes>

  </Router>

    
    </>
  );
}

export default App;
