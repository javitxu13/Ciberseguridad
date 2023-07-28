import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./page/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./page/Firebase";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Navbar from "./page/Navbar";
import Services from "./page/Services";
import ContactForm from "./page/ContactForm";
import PaginaPrincipal from "./page/PaginaPrincipal";
import About from "./page/About";
import CybersecurityStats from "./page/CybersecurityStats";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <UserProvider> {/* Move the UserProvider outside the Router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal user={user} />} />
          <Route path="/about" element={<About user={user} />} />
          <Route path="/services" element={<Services user={user} />} />
          <Route path="/contact" element={<ContactForm user={user} />} />
          <Route path="/cybersecurity" element={<CybersecurityStats user={user} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
