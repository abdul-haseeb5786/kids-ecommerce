import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/saylani-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  let timeoutId = null; // To prevent immediate close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId); // Prevent unwanted closing
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(null);
    }, 300); // Delay closing
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Search Icon */}
        <div className="hidden md:flex items-center gap-4">
          <FiSearch className="text-2xl cursor-pointer" />
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Right Side: Icons */}
        <div className="hidden md:flex items-center gap-6">
          <FiUser className="text-2xl cursor-pointer" />
          <FiShoppingCart className="text-2xl cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex justify-center mt-4 space-x-6 uppercase text-sm font-semibold">
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("boys")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-red-500">Boys Clothes</a>
          {dropdownOpen === "boys" && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shirts</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pants</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kurtas</a>
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("girls")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="hover:text-red-500">Girls Clothes</a>
          {dropdownOpen === "girls" && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Frocks</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Skirts</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tops</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-red-500">Summer'25</a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 uppercase text-sm font-semibold">
          <div>
            <button onClick={() => setDropdownOpen(dropdownOpen === "boys" ? null : "boys")} className="hover:text-red-500">
              Boys Clothes {dropdownOpen === "boys" ? "▲" : "▼"}
            </button>
            {dropdownOpen === "boys" && (
              <div className="flex flex-col space-y-2 mt-2">
                <a href="#" className="hover:text-red-500">Shirts</a>
                <a href="#" className="hover:text-red-500">Pants</a>
                <a href="#" className="hover:text-red-500">Kurtas</a>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setDropdownOpen(dropdownOpen === "girls" ? null : "girls")} className="hover:text-red-500">
              Girls Clothes {dropdownOpen === "girls" ? "▲" : "▼"}
            </button>
            {dropdownOpen === "girls" && (
              <div className="flex flex-col space-y-2 mt-2">
                <a href="#" className="hover:text-red-500">Frocks</a>
                <a href="#" className="hover:text-red-500">Skirts</a>
                <a href="#" className="hover:text-red-500">Tops</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-red-500">Summer'25</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
