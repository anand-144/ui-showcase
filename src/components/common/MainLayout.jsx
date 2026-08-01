import { Outlet } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";
import MobileDrawer from "../navbar/MobileDrawer";
import Footer from "../navbar/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <MobileDrawer />

      <div className="flex flex-1">
        <Sidebar />

        <main
          role="main"
          className="flex-1 overflow-x-hidden px-6 py-8 lg:px-8"
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;