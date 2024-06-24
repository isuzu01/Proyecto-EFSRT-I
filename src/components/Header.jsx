import React, { useState } from 'react'
import NavBarItem from './NavBar'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const[isActive, setIsActive] = useState('')
  const handleClick = (name) =>{
    setIsActive(name)
  }
  return (
    <header className='absolute w-full'>
      <div className='flex flex-row items-center bg-[#00000089]'>
        <div className='flex justify-center mx-10 py-2'>
        <Link to={'/'}>
          <img 
            className="object-contain "
            src={logo} 
            alt='logo'
          />
        </Link>
          
        </div>
        <nav className='w-9/12'>
          <ul className='flex flex-row justify-evenly'>
            <NavBarItem 
              url='/' 
              title='Inicio' 
              className={` ${isActive === 'inicio' ?'text-marca-red' : 'text-white'}`}
              onClick={() => handleClick('inicio')}
              />
            <NavBarItem 
              url='/menu' 
              title='Menú' 
              className={` ${isActive === 'menu' ?'text-marca-red' : 'text-white'}`}
              onClick={() => handleClick('menu')}
              />
            <NavBarItem 
              url='/reserva' 
              title='Reserva' 
              className={` ${isActive === 'reserva' ?'text-marca-red' : 'text-white'}`}
              onClick={() => handleClick('reserva')}
              />
            <NavBarItem 
              url='/contacto' 
              title='Contacto' 
              className={` ${isActive === 'contacto' ?'text-marca-red' : 'text-white'}`}
              onClick={() => handleClick('contacto')}
              />
            <NavBarItem 
              url='/locacion' 
              title='Locación' 
              className={` ${isActive === 'locacion' ?'text-marca-red' : 'text-white'}`}
              onClick={() => handleClick('inicio')}
              />
          </ul>
        </nav>
      </div>      
    </header>
  )
}

export default Header