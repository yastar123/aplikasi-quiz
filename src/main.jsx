import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Page/Quiz";
import Error from "./Page/Error";
import Result from "./Page/Result";
import Login from "./Page/Login";
import Register from "./Page/Register";
import "./index.css";
import { app, auth, firestore } from "./config/firebase";

console.log("app:", app);
console.log("auth:", auth);
console.log("firestore:", firestore);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
