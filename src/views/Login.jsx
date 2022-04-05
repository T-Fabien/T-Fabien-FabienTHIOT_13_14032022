import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";

function Login() {
  document.title = "Argent Bank - Sign In";

  return (
    <div className="app">
      <Navbar />
      <main className="main bg-dark">
        <SignIn />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
