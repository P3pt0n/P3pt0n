import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ContenedorHeader, Header, Titulo } from '../elementos/Header';
import Boton from '../elementos/Boton';
import { ContenedorFiltros,Formulario, Input, ContenedorBoton } from '../elementos/ElementosFormulario';
import { ReactComponent as SvgLogin } from '../imagenes/login.svg';
import styled from 'styled-components';
import Alerta from '../elementos/Alerta';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.25rem; /*100px*/
    margin-bottom: 1.25rem; /* 20px*/
`;


const InicioSesion = () => {
    const[email, emailRevision] = useState('');
    const [password, establecerPassword] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta]=useState(false);
    const [alerta, cambiarAlerta]=useState({});
    const navigate = useNavigate();


    const handleOnchange = (e) => {

        if (e.target.name === 'email'){  
            emailRevision(e.target.value);
        }
       else { 
            establecerPassword(e.target.value);

       }    
}

    const handleSubmit = async (e) => {
            e.preventDefault();
            cambiarEstadoAlerta(false);
            cambiarAlerta({}); 

            if(email === '' || password === '') {
                console.error('Email or password is required');
                cambiarEstadoAlerta (true);
                cambiarAlerta ({tipo: 'error', mensaje: 'Complete the fields'});
                return;
            }

            const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9-.]+/;

            if(!expresionRegular.test(email)) { //si el email no cumple con la expresion regular
                
                cambiarEstadoAlerta (true);
                cambiarAlerta ({tipo: 'error', mensaje: 'Invalid email or character'});
                return; // esto hace que salgamos de la funion y no se siga ejecutando el codigo de aabajo
            }
            
            try {
                const auth = getAuth();
                await   signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    console.log('User logged');
                    const user = userCredential.user;

                    navigate("/");
                })
            } catch (error) {
                console.log('el error es ' + error.code);
                cambiarEstadoAlerta(true);

                let mensaje;
                switch(error.code){
        
                case 'auth/invalid-credential':
                        mensaje = 'Invalid credentials';
                    break;
                    case 'auth/missing-password':
                        mensaje = 'Missing passwrod';
                    break;
                    default:
                        mensaje = 'error login user';
                    break;
                }
                cambiarAlerta({tipo:'error', mensaje: mensaje});
            }
    }
    console.log(estadoAlerta);
    return (
        
        <>
        <Helmet><title> Crear cuenta</title></Helmet>
        <Header>
            <ContenedorHeader>
                <Titulo>Crear cuenta</Titulo>
                <div>
                    <Boton to="/crear-cuenta"> Registrarse</Boton>
                </div>
             </ContenedorHeader>
        </Header>
        <Formulario onSubmit={handleSubmit}>
            <Svg/>
            <Input value={email} type='email' name="email" placeholder='Correo Electronico' onChange={handleOnchange}/>
            <Input type='password' name="password" placeholder='Contraseña' value={password} onChange={handleOnchange}  />
            <ContenedorBoton>
                <Boton as="button" primario type='submit'>Iniciar Sesion </Boton> 
            </ContenedorBoton>
        </Formulario>
        <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta} ></Alerta>
    </>
    );
}

export default InicioSesion;
