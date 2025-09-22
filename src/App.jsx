import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/navBar/NavBar";
import ClassComponent1 from "./components/ClassComponent1.jsx";
import Fcomponent1 from "./components/Fcomponent1.jsx";
import Login from "./components/Login.jsx";
import Bootstraplogin from "./components/Bootstraplogin.jsx";
import Fourmiklogin from "./components/Formiklogin.jsx";
import FunctionCopm from './components/FunctionCopm';
function App() {
    return (
        <>
            {/* <Main /> */}
            {/* JSX Structure should have only one parent element */}
            <NavBar />
            {/* <Login /> */}
            {/* <Bootstraplogin /> */}
            <FunctionCopm message="Message 1" myname="Ahmed" />
            <FunctionCopm message="Message 2" myname="Ali" />
            <FunctionCopm message="Message 3" myname="Alina" >
                <p>This is a child element</p>
            </FunctionCopm>

            <Fourmiklogin />
            <Fcomponent1 />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ClassComponent1 />
            <Footer />
        </>
    );
}

export default App;
