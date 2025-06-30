
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Services from "./pages/Services.js";
import Recruitment from "./pages/Recruitment.js";
import Industries from "./pages/Industries.jsx";
import WhyUs from "./pages/WhyUs.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import NotFound from "./pages/NotFound.js";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;