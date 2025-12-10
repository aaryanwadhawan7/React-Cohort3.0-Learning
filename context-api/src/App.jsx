import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "../src/components/Services";
import NoPage from "./components/NoPage";
import Notes from "./components/Notes";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/todo" element={<Todo />} />
          <Route path="/services/notes" element={<Notes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
