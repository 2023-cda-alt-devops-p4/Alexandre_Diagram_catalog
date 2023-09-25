import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes"
import Navbar from "./components/NavBar/NavBar"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
