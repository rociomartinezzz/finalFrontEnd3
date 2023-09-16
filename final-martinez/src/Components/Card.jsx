
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
              <li key={item.id}>{item.nombre}</li>
            ))}
          </ul>
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
      
      {/* En cada card deberán mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}

      {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;