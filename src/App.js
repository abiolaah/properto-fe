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
      <Route path="/" exact element={ <Home></Home>} />
      </Routes>

      <Routes>
      <Route path="/login" exact element={<Login></Login>} />
      </Routes>
      <Routes>
      <Route path="/register" exact element={<Register></Register>} />
      </Routes>
      <Routes>
      <Route path="/houses/:id" exact element={<PropertyDetails></PropertyDetails>} />
      </Routes>

      <Routes>
      <Route path="/admin" exact element={<Admin></Admin>} />
      </Routes>

      <Routes>
      <Route path="/addhouse" exact element={<AddHouse></AddHouse>} />
      </Routes>

      <Routes>
      <Route path="/edit/:id" exact element={<Edit></Edit>} />
      </Routes>

  </Router>

    
    </>
  );
}

export default App;
