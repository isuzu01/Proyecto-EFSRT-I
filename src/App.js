import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Reserva from './pages/Reserva';
import Contacto from './pages/Contacto';
import Locacion from './pages/Locacion';
import Header from './components/Header';
import DetalleSopa from './components/DetalleSopa';
import DetalleNoodle from './components/DetalleNoodles';
import DetallePostre from './components/DetallePostres';
import UpButton from './components/UpButton';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="font-poppins">
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/menu/' element={<Menu/>}/>
        <Route path='/sopa/:sopaId' element={<DetalleSopa/>}/>
        <Route path='/noodle/:noodleId' element={<DetalleNoodle/>}/>
        <Route path='/postre/:postreId' element={<DetallePostre/>}/>
        <Route path='/reserva' element={<Reserva/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/locacion' element={<Locacion/>}/>
      </Routes>
      <UpButton/>
      <Footer/>
    </div>
  );
}

