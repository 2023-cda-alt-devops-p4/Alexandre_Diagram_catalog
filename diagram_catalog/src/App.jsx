import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
