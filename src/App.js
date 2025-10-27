import "./App.css";
import Header from "./Header/Header.jsx";
import Body from "./body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./body/About/About.jsx";
import Contact from "./body/Contact/Contact.jsx";
import Home from "./body/Home/Home.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
