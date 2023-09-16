import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  const addFav = () => {
    // Aquí iría la lógica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map(item => (
              
              <li key={item.id}>
                <h1> Dentista {item.id} : 
                 <Link to={`/Detail/${item.id}`}>{item.name}</Link> {/* Aquí se coloca el contenido del enlace */}
                 </h1>
                 <h2>Nombre de usuario:{item.username}</h2>
                 <button onClick={addFav} className="favButton">Add fav</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
      
      {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}
      {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
     
    </div>
  );
};

export default Card;