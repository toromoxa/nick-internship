import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can change the duration
    });
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:nftId" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
