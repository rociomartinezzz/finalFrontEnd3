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

  const addFav = (id, name, username) => {
    const cardData = {
      id,
      name,
      username,
    };
  
    const favoritesList = JSON.parse(localStorage.getItem('favoritos')) || [];
  
    const exists = favoritesList.some(favorite => favorite.id === id);
    if (!exists) {
      favoritesList.push(cardData);
      localStorage.setItem('favoritos', JSON.stringify(favoritesList));
      alert('Usted ha agregado este dentista a sus favoritos');
    } else {
      alert('Este dentista ya está en sus favoritos');
    }
  };

  return (
    <div className="card">
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map(item => (
              
              <li key={item.id}>
                <h1> Dentista {item.id} : 
                 <Link to={`/Detail/${item.id}`}>{item.name}</Link> 
                 </h1>
                 <h2>Nombre de usuario:{item.username}</h2>
                 <button onClick={() => addFav(item.id, item.name, item.username)} className="favButton">Add fav</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
     
    </div>
  );
};

export default Card;