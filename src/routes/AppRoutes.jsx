import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../components/common/MainLayout";

import Home from "../pages/Home";
import Buttons from "../pages/Buttons";
import Cards from "../pages/Cards";
import Forms from "../pages/Forms";
import Hero from "../pages/HeroPage";
import Pricing from "../pages/Pricing";
import Tables from "../pages/Tables";
import Timeline from "../pages/Timeline";
import Accordion from "../pages/Accordions";
import Loaders from "../pages/Loaders";
import NotFound from "../pages/NotFound";
import Favorites from "../pages/Favorites"
import NavbarPage from "../pages/NavbarPage"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* Future Routes */}
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="forms" element={<Forms />} />
          <Route path="hero" element={<Hero />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="tables" element={<Tables />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="loaders" element={<Loaders />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="navbarpage" element={<NavbarPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;