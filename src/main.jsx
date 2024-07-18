import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
