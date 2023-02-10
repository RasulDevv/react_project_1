import React, {createContext, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Home from './components/home/Home';
import OurJobs from './components/ourJobs/OurJobs';
import Register from './components/SignInAndRegister/Register';
import SignIn from './components/SignInAndRegister/SignIn';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './Uicomponents/Footer';
import Header from './Uicomponents/Header';
import Navbar from './Uicomponents/Navbar';

export const AlertContext = createContext()

const App = () => {
  const [alert, setAlert] = useState(true)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
    <BrowserRouter>
      <AlertContext.Provider value={alert}>
      <button onClick={toggleAlert} className='toggleBtn d-none'><FaBars/></button>
      <Navbar setAlert={setAlert} />
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/AboutUs' element={<AboutUs/>} />
            <Route path='/OurJobs' element={<OurJobs/>} />
            <Route path='/Testimonials' element={<Testimonials/>} />
            <Route path='/ContactUs' element={<ContactUs/>} />
            <Route path='/SignIn' element={<SignIn/>} />
            <Route path='/Register' element={<Register/>} />
          </Routes>
        </div>
        <Footer/>
      </AlertContext.Provider>
    </BrowserRouter>
  );
};

export default App;
