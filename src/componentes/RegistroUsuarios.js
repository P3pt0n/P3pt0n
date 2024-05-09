import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { ContenedorHeader, Header, Titulo } from '../elementos/Header';
import Boton from '../elementos/Boton';
import { ContenedorFiltros,Formulario, Input, InputGrande, ContenedorBoton } from '../elementos/ElementosFormulario';
import { ReactComponent as SvgLogin } from '../imagenes/registro.svg';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase/firebaseconfig';
import {useNavigate} from 'react-router-dom';
import Alerta from '../elementos/Alerta';


const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /*100px*/
    margin-bottom: 1.25rem; /* 20px*/
`;
const RegistroUsuarios = () => {
    const navigate = useNavigate();
    const[correo, establecerCorreo]= useState('');
    const[password, establecerPassword]= useState('');
    const[password2, establecerPassword2]= useState('');
    const[estadoAlerta, cambiarEstadoAlerta]= useState(false);
    const [alerta, cambiarAlerta]= useState({}); //la alerta es un objeto vacio

    const handleOnchange = (e)=> {
        switch (e.target.name) {
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
               break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        //comprobamos si correo es valido
   

        if (correo === '' || password.length === '' || password2.length === ''){
            console.error('Rellena los datos')    
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: 'Rellena los datos'});
            return;
        }


        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            console.error("Invalid correo");
            cambiarEstadoAlerta(true);
            cambiarAlerta ({tipo: 'error', mensaje: 'Correo Invalido'});
            return; // esto hace que salgamos de la funion y no se siga ejecutando el codigo de aabajo
        };

        if (password !== password2){
            console.error('Las contraseñas no coinciden');
            cambiarEstadoAlerta (true);
            cambiarAlerta ({tipo: 'error', mensaje: 'Las contraseñas no coinciden'});
            return;
        }

        try {
            await   createUserWithEmailAndPassword(auth, correo, password).then(() => {
                console.log('User registered');
                navigate("/");
            })
        } catch (error) {
            cambiarEstadoAlerta(true);
            let mensaje;
            switch(error.code){
                case 'auth/weak-password':
                    mensaje = 'Invalid password';
                break;
                case 'auth/invalid-email':
                    mensaje = 'Invalid email';
                break;
                default:
                    mensaje = 'error on creating user';
                break;
            }
            cambiarAlerta({tipo:'error', mensaje: mensaje});
        }
    }


    return (
        <>
            <Helmet><title> Crear cuenta</title></Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear cuenta</Titulo>
                    <div>
                        <Boton to="/inicio-sesion">Iniciar Sesion </Boton>
                    </div>
                 </ContenedorHeader>
            </Header>
            <Formulario onSubmit={handleSubmit}>
                <Svg/>
                <Input value={correo} onChange={ handleOnchange} type='email' name="email" placeholder='Correo Electronico'/>
                <Input value={password} onChange={handleOnchange} type='password' name="password" placeholder='Contraseña'/>
                <Input value={password2} onChange={handleOnchange} type='password' name="password2" placeholder='Repetir Contraseña'/>
                <ContenedorBoton>
                    <Boton as="button" primario type='submit'>Crear Cuenta </Boton> 
                </ContenedorBoton>
            </Formulario>   
            
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}/>
        </>
    );
}


export default RegistroUsuarios;
