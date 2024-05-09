import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import InicioSesion from './componentes/InicioSesion';
import EditarGasto from './componentes/EditarGasto';
import ListaGastos from './componentes/ListaGastos';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import Error from './componentes/Error';
import { Helmet } from 'react-helmet';
import favicon from './icons/logo.png';
import Contenedor from '../src/elementos/Contenedor';
import Fondo from './elementos/Fondo';

  WebFont.load({
    google: {
      families: ['Droid Sans:400,500,700', 'Droid Serif']
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  
  <Helmet>
    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    <title>Aplicacion de gastos</title> /**  Titulo y icono de la pestaña del navegador */
  </Helmet>
    <BrowserRouter >
    <Fondo/>  
    <Contenedor>
      <Routes>
        <Route  path='/inicio-sesion' element={<InicioSesion/>}/>
        <Route  path='/crear-cuenta' element={<RegistroUsuarios/>}/>
        <Route  path='/gastos' element={<GastosPorCategoria/>}/>
        <Route  path='/lista' element={<ListaGastos/>}/>
        <Route  path='/editar/:id' element={<EditarGasto/>}/>
        <Route  path='/' element={<App/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </Contenedor>
    </BrowserRouter>
    </>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
