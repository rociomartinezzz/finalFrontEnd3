import React from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favoritesList = JSON.parse(localStorage.getItem('favoritos')) || [];


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
    <ul>
      {favoritesList.map((favorite, index) => (
        <li key={index} className="card-grid">
          <h1>{favorite.id} : {favorite.name}</h1>
            <h2>Nombre de usuario: {favorite.username}</h2>
            
  
          </li>
      ))}
    </ul>

      
      </div>
    </>
  );
};

export default Favs;