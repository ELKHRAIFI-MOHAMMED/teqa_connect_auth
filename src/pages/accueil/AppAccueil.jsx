import Hero from "./Accueil/Hero";
import Navbar from "./Accueil/Nav";
import HowItWorks from "./Accueil/HowItWorks";
import Features from "./Accueil/Features";
import WhyChoose from "./Accueil/WhyChoose";
import Footer from "./Accueil/Footer";
import FAQ from "./Accueil/FAQ";
import Pricing from "./Accueil/Pricing";
import Testimonials from "./Accueil/Testimonials";
import Integrations from "./Accueil/Integrations";
import {  Routes, Route } from "react-router-dom";
import About from "./pages/About_Us";
import Featurespage from "./pages/Featurespage";
import How_It_Works from "./pages/How_It_Works";
import PrivacyPolicy from "./pages/Privacy_Policy";
import RefundPolicy from "./pages/Refund_Policy";
import Terms_And_Conditions from "./pages/Terms_&_Conditions";
import CookiePolicy from "./pages/Cookie Policy";
import Pricing_page from "./pages/Pricing_page"; 
import Marketplace_page from "./pages/Marketplace_page"; 
import PaymentMethods from "./pages/Payment_Methods"; 
import Marketplace from "./Accueil/Marketplace";
import MarketplaceOverview from "./Accueil/MarketplaceOverview";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";



const AppAccueil = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HowItWorks />
              <Features />
              <WhyChoose />
              <Integrations />
              <Testimonials />
              <MarketplaceOverview/>
              <Marketplace />
              <Pricing />
              <FAQ />
            </>
          }
        />

        <Route path="/about" element={<About/>} />
        <Route path="/Features" element={<Featurespage/>} />
        <Route path="/How_It_Works" element={<How_It_Works/>} />
        <Route path="/Refund_Policy" element={<RefundPolicy/>} />
        <Route path="/Privacy_Policy" element={<PrivacyPolicy/>} />
        <Route path="/Terms_And_Conditions" element={<Terms_And_Conditions/>} />
        <Route path="/Cookie_Policy" element={<CookiePolicy/>} />
        <Route path="/Pricing" element={<Pricing_page/>} />
        <Route path="/Payment_Methods" element={<PaymentMethods/>} />
        <Route path="/Marketplace_page" element={<Marketplace_page/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>

      <Footer />
      </>
  );
};

export default AppAccueil;