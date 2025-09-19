import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/navBar/NavBar.jsx';
import Header from './assets/components/header/Header.jsx';
import Footer from './assets/components/footer/Footer.jsx'; 
import Main from './assets/components/main/main.jsx';
function App() {
  

  return (
    <>
      <Main />
    {/* JSX Structure should have only one parent element */}
    <NavBar />
    <Header />
    <Footer />

    </>
  )
}

export default App
