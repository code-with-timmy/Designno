import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import WebDesign from "./features/WebDesign";
import AppDesign from "./features/AppDesign";
import GraphicDesign from "./features/GraphicDesign";
import ScrollToTop from "./ui/ScrollToTop";
import MapLocation from "./Pages/MapLocation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<AppLayout />}>
          <Route path="web-design" element={<WebDesign />} />
          <Route path="app-design" element={<AppDesign />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="locations" element={<MapLocation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
