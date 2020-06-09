import React, { useState, useEffect } from "react";
import "./style.css"

const App = () => {
  const [contactos, setContactos] = useState([])
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(respuesta => respuesta.json())
      .then(datos => {
        setContactos(datos.results)
      })
  }, []);
  return (
    <>
      {
        contactos.map(contacto => (
          <ContactCard 
            avatar={contacto.picture.large}
            nombre={contacto.name.first + " " + contacto.name.last}
            email={contacto.email}
            edad={contacto.dob.age}
          />
        ))
      }
    </>
  );
};
const ContactCard = props => {
  const [showAge, setShowAge] = useState(true);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="perfil" />
      <div className="user-details">
        <p>Nombre: {props.nombre}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Ocultar edad
        </button>
        { showAge && <p>Edad: {props.edad} Años</p> }
      </div>
    </div>
  );
}


export default App;
