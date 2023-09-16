import React, { useState } from 'react';


const Form = () => {

    const [nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [nombreTemporal, setNombreTemporal] = useState('');
    const [EmailTemporal, setEmailTemporal] = useState('');
    const [mostrarInfo, setMostrarInfo] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [error, setError] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault(); 
  
  
  
      if (nombre.length < 5) {
        setError('Estimado, verifique su información nuevamente');
        return;
      }
      if (!emailRegex.test(Email)) {
        setError('Estimado, verifique su información nuevamente');
        return;
  
      }
  
      if (nombre.trim() === '' || Email.trim() === '' ) {
        setError('Estimado, ingrese todos los campos');
        return;
      }
  
  
      
      setNombreTemporal(nombre);
      setEmailTemporal(Email);
      setMostrarInfo(true);
      {setNombre('')}
      {setEmail('')}
      {setError('')}
      
    }
  
    return (
      <div>
        
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            
            <label htmlFor="Email">Email:</label>
            <input type="Email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
         
          <button type="submit">Enviar</button>
        </form>
        {mostrarInfo && <Cuadro nombreTemporal={nombreTemporal} EmailTemporal={EmailTemporal} />}
       
      </div>
    );
  }

  export default Form;
  