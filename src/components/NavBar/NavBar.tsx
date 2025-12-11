import React from 'react';
import { Link } from 'react-router-dom'; 

function NavBar() {
  return (
   
   <div className="bg-gray-900/10 shadow-lg sticky top-0 z-50"> 
      <nav className="flex justify-between items-center mx-auto py-7 px-5">
        
       
        <div className="navbarLogo">
          <Link 
            to="/" 
            className="text-2xl font-extrabold text-purple-600 transition duration-300 hover:text-purple-400 pl-12">Gustavo
          </Link>
        </div>

       
        <div className="flex space-x-8 pr-56" >
          
          <Link 
            to="/" 
            className="text-gray-200 text-lg font-medium tracking-wide transition duration-300 hover:text-cyan-400 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">Home
          </Link>

          <Link 
            to="/" 
            className="text-gray-200 text-lg font-medium tracking-wide transition duration-300 hover:text-cyan-400 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">Sobre 
          </Link>
        
       
          <Link 
            to="/projetos" 
            className="text-gray-200 text-lg font-medium tracking-wide transition duration-300 hover:text-cyan-400  hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">Projetos
          </Link>
          
          
          <Link 
            to="/contatos" 
            className="text-gray-200 text-lg font-medium tracking-wide transition duration-300 hover:text-cyan-400  hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">Contatos 
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;