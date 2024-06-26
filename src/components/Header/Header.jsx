import React from 'react';
import './Header.css';
import { Nav } from '../Nav/Nav';  // Asegúrate de que esto coincida con el nombre de la carpeta y el archivo

export const Header = () => {
  return (
    <header className="header">
      <Nav />
    </header>
  );
};
