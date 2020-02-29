import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Gallery from "./components/Gallery/Gallery";
import Reservation from "./components/Reservation/Reservation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return ( 
    <>
      <Navigation />

      <Header />

      <main>
        <Content />

        <Gallery />

        <Reservation />
        
        <Contact />
      </main>

      <Footer />
    </>
  );
}
 
export default App;