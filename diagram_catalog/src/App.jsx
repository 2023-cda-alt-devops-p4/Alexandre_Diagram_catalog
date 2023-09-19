import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
