import React from "react";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import { Download, FolderKanban, Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center px-6 py-2 lg:py-0 lg:px-32">
        <div className="p-4 flex-1 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Aosaf</h1>
          <h3 className="text-xl font-bold text-gray-400 hidden lg:block">
            Frontend Developer
          </h3>
        </div>
        <div className="lg:hidden flex items-center gap-4">
            <DarkModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-4">
                <Link to={"/"}>
                  <Button className="p-4">
                    <Home />
                    Home
                  </Button>
                </Link>
                <Link to={"/projects"}>
                  <Button className="p-4">
                    <FolderKanban />
                    Projects
                  </Button>
                </Link>
                <Button className="w-1/2 p-2">
                  <Download />
                  Download CV
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <ul className=" gap-12 items-center hidden lg:flex">
          <Link to={"/"}>
            <Button variant="ghost">
              <Home />
              Home
            </Button>
          </Link>
          <Link to={"/projects"}>
            <Button variant="ghost">
              <FolderKanban />
              Projects
            </Button>
          </Link>
          <Button>
            <Download />
            Download CV
          </Button>
          <DarkModeToggle />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
