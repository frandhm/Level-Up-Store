import React, { useState} from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { addUser } from "../../services/firestoreService"
import { useHistory } from "react-router-dom"


const Useform = () =>{
    const [form, setForm] = UseState({ run: "",nombre:"",correo:"",clave:"",fecha:""});
    const [msg, setMsg] = UseState("");
    const history = useHistory();

    const handleChange = e => setForm({...form, [e.target.id]: e.target.value});

    const handleSubmit = async e =>{
        e.preventDefault();
        const { run, nombre, correo, clave, fecha} = form;
        if( !vakudarRun(run)) return setMsg("RUN Incorrecto");
        if( !nombre) return setMsg("Nombre es vacío");
        if( !vakudarCorreo(correo)) return setMsg("Correo incorrecto");
        if( !esMayorEdad(fecha)) return setMsg("Debe ser mayor a 18 años");
        

        await addUser(form);

        setMsg("El formulario se envio correctamente");

        setTimeout(() => {
            history.push(correo === "admin@duoc.cl" ? "/perfil-admin?nombre="+nombre : "/perfil-cliente?nombre"+nombre);
        },1000)

    };

    return(
        <form onSubmit={handleSubmit}>
            <Input id="run" label="RUN" value={form.run} onChange={handleChange} required/>
            <Input id="nombre" label="Nombre" value={form.nombre} onChange={handleChange} required/>
            <Input id="correo" label="Correo" type="email" value={form.correo} onChange={handleChange} required/>
            <Input id="clave" label="Clave" type="password" value={form.clave} onChange={handleChange} required/>
            <Input id="fecha" label="Fecha de NAcimiento" type="fecha" value={form.fecha} onChange={handleChange} required/>


        </form>


    )

        
}

export default Useform;