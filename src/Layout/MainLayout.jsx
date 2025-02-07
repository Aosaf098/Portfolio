import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="h-dvh font-poppins">
        <div className="h-[120px]">
          <Navbar />
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
