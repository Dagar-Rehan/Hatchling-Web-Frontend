import logo from "../assets/Hatchling.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 grid grid-cols-2 grid-rows-1 bg-zinc-800 md:px-4 lg:px-8 xl:px-16">
        <div className="flex items-center justify-self-start px-4 md:px-8">
          <img src={logo} alt="Logo" className="h-auto w-8 md:w-16 lg:w-20" />
          <Link
            to="/"
            className="text-xl md:text-2xl lg:text-3xl text-white no-underline text-extrabold"
          >
            Hatchling
          </Link>
        </div>
        <div className="self-center justify-self-end px-4 md:px-8">
          <div className="hidden md:flex gap-5 items-center px-4 md:px-8 bg-sky-900 h-fit border-2 rounded border-sky-900 ">
            <Link
              to="/"
              className="text-white no-underline hover:scale-125 active:scale-90"
            >
              Home
            </Link>
            <Link
              to="/Editor"
              className="text-white no-underline hover:scale-125 active:scale-90"
            >
              Editor
            </Link>
            <Link
              to="/Characters"
              className="text-white no-underline hover:scale-125 active:scale-90"
            >
              Characters
            </Link>
            <Link
              to="/Help"
              className="text-white no-underline hover:scale-125 active:scale-90"
            >
              Help
            </Link>
            <Link
              to="/About"
              className="text-white no-underline hover:scale-125 active:scale-90"
            >
              About
            </Link>
          </div>
          <div className="block md:hidden px-4 md:px-8">
            <div
              class="space-y-2 cursor-pointer hover:scale-105 active:scale-95 py-4"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div class="w-8 h-0.5 bg-white"></div>
              <div class="w-8 h-0.5 bg-white"></div>
              <div class="w-8 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`w-screen bg-sky-900 text-white top-16 md:hidden ${
          isOpen ? "sticky" : "hidden"
        }`}
      >
        <div className="grid items-center justify-center text-center z-10 divide-y-2">
          <Link
            to="/"
            className="text-white no-underline hover:scale-125 active:scale-90 py-4"
          >
            Home
          </Link>
          <Link
            to="/Editor"
            className="text-white no-underline hover:scale-125 active:scale-90 py-4"
          >
            Editor
          </Link>
          <Link
            to="/Characters"
            className="text-white no-underline hover:scale-125 active:scale-90 py-4"
          >
            Characters
          </Link>
          <Link
            to="/Help"
            className="text-white no-underline hover:scale-125 active:scale-90 py-4"
          >
            Help
          </Link>
          <Link
            to="/About"
            className="text-white no-underline hover:scale-125 active:scale-90 py-4"
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
}
