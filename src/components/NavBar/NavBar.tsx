/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Links para evitar repetição de código
  const navLinks = [
    { name: 'Home', to: '/#home' },
    { name: 'Sobre', to: '/#sobre' },
    { name: 'Projetos', to: '/#projetos' },
    { name: 'Contatos', to: '/#contatos' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg shadow-2xl z-[100] border-b border-white/5">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
        
        {/* Logo */}
        <div className="navbarLogo">
          <NavHashLink 
            smooth
            to="/#home" 
            className="text-2xl font-extrabold text-purple-600 transition duration-300 hover:text-purple-400"
          >
            Gustavo
          </NavHashLink>
        </div>

        {/* Botão Mobile (Hamburger) */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-gray-200 focus:outline-none p-2"
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Links Desktop */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <NavHashLink 
              key={link.name}
              smooth
              to={link.to} 
              className="text-gray-200 text-lg font-medium tracking-wide transition duration-300 hover:text-cyan-400"
            >
              {link.name}
            </NavHashLink>
          ))}
        </div>

        {/* Menu Mobile (Dropdown) */}
        <div className={`
          absolute top-full left-0 w-full bg-black/95 border-b border-white/10 transition-all duration-300 ease-in-out lg:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}
        `}>
          <div className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((link) => (
              <NavHashLink 
                key={link.name}
                smooth
                to={link.to} 
                onClick={() => setIsOpen(false)} 
                className="text-gray-200 text-xl font-medium hover:text-cyan-400 transition"
              >
                {link.name}
              </NavHashLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;