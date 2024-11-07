import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Availablepets from './Components/Availablepets';
import Barnyard from './Components/Barnyard';
import Birds from './Components/Birds';
import Cats from './Components/Cats';
import Contact from './Components/Contact';
import Cow from './Components/Cow';
import Dogs from './Components/Dogs';
import Fish from './Components/Fish';
import Home from './Components/Home';
import Modal from './Components/Modal';
import Nearbyshelther from './Components/Nearbyshelters';
import Rabbit from './Components/Rabbit';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/Availablepets" element={<Availablepets />} />
          <Route path="/Barnyard" element={<Barnyard />} />
          <Route path="/Birds" element={<Birds />} />
          <Route path="/Cats" element={<Cats />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cow" element={<Cow />} />
          <Route path="/Dogs" element={<Dogs />} />
          <Route path="/Fish" element={<Fish />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Nearbyshelter" element={<Nearbyshelther />} />
          <Route path="/Rabbit" element={<Rabbit />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
