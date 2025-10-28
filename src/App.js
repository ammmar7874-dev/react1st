import "./App.css";
import Header from "./Header/Header.jsx";
import Body from "./body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./body/About/About.jsx";
import Contact from "./body/Contact/Contact.jsx";
import Home from "./body/Home/Home.jsx";
import Mens from "./body/Home/Men/Mens.jsx";
import Woman from "./body/Home/Women/Woman.jsx";
import Kids from "./body/Home/Kids/Kids.jsx";

function App() {
  return (
    <>
      <div className="ColApp">
        <div className="=man">
          <h1> Mans Collection </h1>
          <Mens />
        </div>

        <div className="women">
          <h1> Woman Collection </h1>
          <Woman />
        </div>
        <div className="kids">
          <h1> Kids Collection </h1>
          <Kids />
        </div>
      </div>
      {/* 
      <Home />
      <About />
      <Contact />
      <Header />
      <Body />
      <Footer /> */}
    </>
  );
}

export default App;
