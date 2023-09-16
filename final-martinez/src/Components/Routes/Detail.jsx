import React from 'react';
import {useParams,} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
      });
  }, [id]); 

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Detalles del Dentista</h1>
      <p>ID: {user.id}</p>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Direccion: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
    </div>
  );
};


export default Detail