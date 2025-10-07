/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/

import { addUser } from ".service/firestoreService";
import { validarCorreo, validarNombre, validarFecha } from ""

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formUsuario");
  const runInput = document.getElementById("run");
  const nombreInput = document.getElementById("nombre");
  const correoInput = document.getElementById("correo");
  const claveInput = document.getElementById("clave");
  const fechaInput = document.getElementById("fecha");
  const mensaje = document.getElementById("mensaje");

   //validar si hay conexion con el formulario de registro de usuario

   if(!form) return console.log("No se encontro #formUsuario")
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      mensaje.innerText = "";
      
      const run = runInput.value.trim().toUpperCase();
      const nombre = nombreInput.value.trim();
      const correo = correoInput.value.trim();
      const clave = claveInput.value.trim();
      const fecha = fechaInput.value.trim();

      //validar el ingreso correcto de los datos para el registro

      if(!validarRun(run)) return mensaje.innerText = "Run Inorrecto";
      if(!nombre) return mensaje.innerText = "Nombre en blanco";
      if(!validarCorreo(correo)) return mensaje.innerText = "Correo Inorrecto";
      if(!validarFecha(fecha)) return mensaje.innerText = "debe ser mayor de 18";



      try {
        await addUser({run,nombre,correo,clave,fecha});
        mensaje.innerText = "Formulario enviado correctamente";
        
        setTimeout(()=>{
          window.location.href =
            correo.toLowercase() === "admin@duoc.cl"
            ? 'assets/page/perfilAdmin.html?nombre=${encodeURIComponent(nombre)}'
            : 'assets/page/perfilCliente.html?nombre=${encodeURIComponent(nombre)}'
            

        }, 1000);
      } catch (error) {
        console.error("error",error)
        
      }



    })



})
