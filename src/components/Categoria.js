import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Categoria() {
  const { categoria } = useParams(); // Obtén la categoría de la URL
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Fetch del JSON
    fetch('https://raw.githubusercontent.com/crisro14/devtools/master/tools.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verifica si se están obteniendo los datos
        const filteredTools = data.filter(tool => tool.categoria.toLowerCase() === categoria.toLowerCase());
        console.log(filteredTools); // Verifica si se están filtrando correctamente
        setTools(filteredTools);
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
  }, [categoria]);
  

  return (
    <div className="p-5 header-spacing">
      <h1 className="text-3xl font-bold mb-4">{categoria.toUpperCase()}</h1>
      <div className="cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map(tool => (
        <a href={tool.link} target="_blank" rel="noopener noreferrer" className="card boton-elegante ">

            <figure className="px-1 pt-1 pad-negativo">
              <img src={tool.foto} alt={tool.titulo} className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center pad-negativo">
              <h2 className="card-title text-bold">{tool.titulo}</h2>
              <p className="card-text">{tool.descripcion}</p>
          </div>
        </a>
        ))}
      </div>
    </div>
  );
}

export default Categoria;
