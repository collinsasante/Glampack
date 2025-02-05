import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import RecoverAccount from "./pages/RecoverAccount";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/recover-account" element={<RecoverAccount />} />
        <Route path="/signup" element={<SignupPage />} />{" "}
        <Route path="/home" element={<Home />} />
        {/* Add SignupPage route */}
      </Routes>
    </div>
  );
};

export default App;
