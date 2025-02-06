import React from "react";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import { Download, FolderKanban, Home, Projector } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center px-32">
        <div className="p-4 flex-1 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Aosaf</h1>
          <h3 className="text-xl font-bold text-subtitle">
            Frontend Developer
          </h3>
        </div>
        <ul className="flex gap-12 items-center">
          <Button>
            <Home />
            Home
          </Button>
          <Button>
            <FolderKanban />
            Projects
          </Button>
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
