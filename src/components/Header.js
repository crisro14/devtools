import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIcons,
  faCube,
  faCode,
  faImage,
  faVideo,
  faBlog,
  faTools,
  faPalette,
  faWandSparkles,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo o Título */}
        <div className="text-white text-2xl font-bold">Mis herramientas</div>

        {/* Navbar */}
        <div className="w-full block lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-wrap justify-center lg:justify-start space-x-2 lg:space-x-4">
            <Link to="/iconos" className="button mb-2 lg:mb-0" title="Iconos">
              <FontAwesomeIcon icon={faIcons} size="lg" />
            </Link>
            <Link to="/3d" className="button mb-2 lg:mb-0" title="3D">
              <FontAwesomeIcon icon={faCube} size="lg" />
            </Link>
            <Link to="/librerias" className="button mb-2 lg:mb-0" title="Librerías">
              <FontAwesomeIcon icon={faCode} size="lg" />
            </Link>
            <Link to="/illustraciones" className="button mb-2 lg:mb-0" title="Illustraciones">
              <FontAwesomeIcon icon={faImage} size="lg" />
            </Link>
            <Link to="/fotos" className="button mb-2 lg:mb-0" title="Fotos">
              <FontAwesomeIcon icon={faImage} size="lg" />
            </Link>
            <Link to="/videos" className="button mb-2 lg:mb-0" title="Videos">
              <FontAwesomeIcon icon={faVideo} size="lg" />
            </Link>
            <Link to="/blogs" className="button mb-2 lg:mb-0" title="Blogs">
              <FontAwesomeIcon icon={faBlog} size="lg" />
            </Link>
            <Link to="/herramientas" className="button mb-2 lg:mb-0" title="Herramientas">
              <FontAwesomeIcon icon={faTools} size="lg" />
            </Link>
            <Link to="/colores" className="button mb-2 lg:mb-0" title="Colores">
              <FontAwesomeIcon icon={faPalette} size="lg" />
            </Link>
            <Link to="/fondos" className="button mb-2 lg:mb-0" title="Fondos">
              <FontAwesomeIcon icon={faImage} size="lg" />
            </Link>
            <Link to="/inspiracion" className="button mb-2 lg:mb-0" title="Inspiración">
              <FontAwesomeIcon icon={faWandSparkles} size="lg" />
            </Link>
            <Link to="/componentes" className="button mb-2 lg:mb-0" title="Componentes">
              <FontAwesomeIcon icon={faPuzzlePiece} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Header;