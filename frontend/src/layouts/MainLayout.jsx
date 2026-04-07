import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
