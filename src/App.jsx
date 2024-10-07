import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import About1 from "./Components/Pages/AboutUS";
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import MapComponent from './Components/MapComponent';
import Gallery from './Components/Pages/Gallery';
import OurBusiness from './Components/Pages/OurBusiness';
import Contact1 from "./Components/Pages/Contact1";

import NavbarTYP from './Components/Pages/Navbar/NavbarTYP';
import Navbar1 from './Components/Pages/Navbar/Navbar1';
import TypesOfPotatoes from './Components/Pages/TypesOfPotatoes';
import NutritionalFacts from './Components/Pages/NutritionalFacts';
import PotatoHistory from './Components/Pages/PotatoHistory';
import PotatoRecipes from './Components/Pages/PotatoRecipes';
import FAQ from './Components/Pages/FAQ';
import PotatoInsights from './Components/Pages/Insights';
import Soup from './Components/Pages/Recipe/Soup';
import Garlic from './Components/Pages/Recipe/Garlic';
import Salad from './Components/Pages/Recipe/salad';
import Fries from './Components/Pages/Recipe/fries';
import Mash from './Components/Pages/Recipe/mash';
// New imports for Digestive, Hypoallergenic, Immune, Skin
// import Digestive from './Components/Pages/Recipe/Digestive';
// import Hypoallergenic from './Components/Pages/Recipe/Hypoallergenic';
 import Imune from './Components/Pages/nutribenefit/imune';
import Skin from './Components/Pages/nutribenefit/skin';
import Digestive from './Components/Pages/nutribenefit/digestive';
import Russet from './Components/Pages/type/ruseet';
import Finger from './Components/Pages/type/finger';
import Yellow from './Components/Pages/type/yellow';
import Red from './Components/Pages/type/red';
import Chip from './Components/Pages/type/chip';
import Rost from './Components/Pages/Recipe/rost';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Anim from './Components/Pages/circ';
// Layout component
const Layout = ({ children, showNavbar, navbarType }) => (
  <>
    {showNavbar && (
      <>
        {navbarType === 'NavbarTYP' ? <NavbarTYP /> : <NavbarTYP />}
      </>
    )}
    {children}
  </>
);
// App component with all routes
const App = () => {
  const [playState, setPlayState] = React.useState(false);
  return (
    <Router>
    <Routes>
      {/* Existing Routes */}
      <Route path="/" element={<Layout showNavbar={true} navbarType="Navbar1">
        <Hero />
        <div className="container">
          <Title subTitle='Our Services Unveiled' title='What We Offer' />
          <Programs />
          <Anim /> {/* Add the Anim component here */}
          <About setPlayState={setPlayState} />
          <Title title='Agri Business'  />
          <Title title='Potato Insights'  />
          <PotatoInsights /> {/* Add the Insights section here */}
          <Title subTitle='Gallery' title='AGPOTATO' />
          <Campus />
          <Title subTitle='Our Vendors' title='Vendor & Customer Feedbacks' />
          <Testimonials />
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
        <MapComponent />
      </Layout>} />
        <Route path="/Gallery" element={<Layout showNavbar={false}><Gallery /></Layout>} />
        <Route path="/AboutUS" element={<Layout showNavbar={false}><About1 /></Layout>} />
        
        <Route path="/Contact1" element={<Layout showNavbar={true} navbarType="Navbar1"><Contact1 /></Layout>} />
        <Route path="/OurBusiness" element={<Layout showNavbar={true} navbarType="NavbarTYP"><OurBusiness /></Layout>} />
        <Route path="/PotatoInsights" element={<Layout showNavbar={true} navbarType="NavbarTYP"><PotatoInsights /></Layout>} />
        <Route path="/TypesOfPotatoes" element={<Layout showNavbar={true} navbarType="NavbarTYP"><TypesOfPotatoes /></Layout>} />
        <Route path="/nutritional-facts" element={<Layout showNavbar={true} navbarType="NavbarTYP"><NutritionalFacts /></Layout>} />
        <Route path="/potato-history" element={<Layout showNavbar={true} navbarType="NavbarTYP"><PotatoHistory /></Layout>} />
        <Route path="/potato-recipes" element={<Layout showNavbar={true} navbarType="NavbarTYP"><PotatoRecipes /></Layout>} />
        <Route path="/Soup" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Soup /></Layout>} />
        <Route path="/Garlic" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Garlic /></Layout>} />
        <Route path="/Salad" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Salad /></Layout>} />
        <Route path="/faq" element={<Layout showNavbar={true} navbarType="NavbarTYP"><FAQ /></Layout>} />
        <Route path="/Fries" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Fries /></Layout>} />
        <Route path="/Mash" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Mash /></Layout>} />
        {/* New Routes */}
        {/* <Route path="/Digestive" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Digestive /></Layout>} />
        <Route path="/Hypoallergenic" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Hypoallergenic /></Layout>} />*/
        <Route path="/immune" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Imune /></Layout>} /> }
        <Route path="/Skin" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Skin /></Layout>} />
        <Route path="/Digestive" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Digestive /></Layout>} />

        <Route path="/russet" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Russet /></Layout>} />
        <Route path="/finger" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Finger /></Layout>} />
        <Route path="/yellow" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Yellow /></Layout>} />
        <Route path="/red" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Red /></Layout>} />
        <Route path="/chip" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Chip /></Layout>} />
        <Route path="/rost" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Rost /></Layout>} />
        <Route path="/circ" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Anim /></Layout>} />
        {/* <Route path="/rost" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Rost /></Layout>} /> */}
      </Routes>
    </Router>
  );
}
export default App;