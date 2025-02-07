import React from "react";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import { Download, FolderKanban, Home, Projector } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center px-32">
        <div className="p-4 flex-1 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Aosaf</h1>
          <h3 className="text-xl font-bold text-gray-400">
            Frontend Developer
          </h3>
        </div>
        <ul className="flex gap-12 items-center">
          <Link to={"/"}>
            <Button variant="ghost">
              <Home />
              Home
            </Button>
          </Link>
          <Link to={'/projects'}>
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
