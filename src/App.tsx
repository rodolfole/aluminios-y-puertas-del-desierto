import Brands from "./components/Brands";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Us from "./components/Us";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Us />
      <Products />
      <Brands />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
