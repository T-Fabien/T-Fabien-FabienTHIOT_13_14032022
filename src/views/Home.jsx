import React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  document.title = "Argent Bank - Home Page";

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
