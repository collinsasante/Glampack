import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecoverAccount from "./components/RecoverAccount";
import LoginPage from "./components/LogInPage";
import SignupPage from "./components/SignUpPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/recover-account" element={<RecoverAccount />} />
        <Route path="/signup" element={<SignupPage />} />{" "}
        {/* Add SignupPage route */}
      </Routes>
    </Router>
  );
};

export default App;
