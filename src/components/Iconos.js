import React, { useEffect, useState } from 'react';

function Iconos() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Fetch del JSON
    fetch('https://raw.githubusercontent.com/crisro14/my-devtools/master/tools.json')
      .then(response => response.json())
      .then(data => {
        // Filtra por categoría 'Iconos'
        const iconos = data.filter(tool => tool.categoria === 'Iconos');
        setTools(iconos);
      });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Iconos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(tool => (
          <div key={tool.id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={tool.foto} alt={tool.titulo} className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{tool.titulo}</h2>
              <p>{tool.descripcion}</p>
              <div className="card-actions">
                <a href={tool.link} className="btn btn-primary">Visitar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iconos;

