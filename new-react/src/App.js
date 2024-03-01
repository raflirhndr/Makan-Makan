import "./App.css";
import Main from "./components/utils/Main";
import Navbar from "./components/utils/Navbar";
import Foods from "./components/konten/Foods";
import Contact from "./components/konten/Contact";
import Footer from "./components/utils/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="Foods" element={<Foods />} />
        <Route path="Contact" element={<Contact />} />
        <Route index element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
