import React from 'react'
import { Link } from 'react-router-dom'
import libroReclamo from '../img/libro-de-reclamaciones.png'
import faceIcon from '../img/facebook.png'
import intaIcon from '../img/instagram.png'
import twitIcon from '../img/twitter.png'

const Footer = () => {
  return (
    <footer className='bg-black text-slate-300'>
    <div className='flex flex-col justify-center'>
      <div className=' py-10 border-b border-slate-600'>
        <div className='flex flex-row justify-center pb-3'>
          <div>
            <Link to={'https://www.facebook.com/'} target='_blank'>
              <img src={faceIcon} alt='facebook'/>
            </Link>          
          </div>
          <div>
            <Link to={'https://www.instagram.com/'} target='_blank'>
              <img src={intaIcon} alt='instagram'/>
            </Link>          
          </div>
          <div>
            <Link to={'https://x.com/'} target='_blank'>
              <img src={twitIcon} alt='twitter'/>
            </Link>          
          </div>
        </div>
        <p className='text-center'>La Morada de Xie Lian</p>  
      </div>
          
      <div className='flex flex-row justify-around py-10 '>
        <div className='flex flex-col pt-3'>
          <p>INFORMACIÓN</p>
          <div className='text-sm flex flex-col gap-2 pt-3'>
            <Link to={'/reserva'} onClick={()=>window.scrollTo({ top: 0})}>Reservas</Link>
            <Link>Politica de datos personaless</Link>
            <Link>Término y condiciones de Promociones</Link>
            <Link>Derechos</Link>
          </div>          
        </div>
        <div className='flex flex-col pt-3'>
          <p>NOSOTROS</p>
          <div className='text-sm flex flex-col gap-2 pt-3'>
            <Link to={'/'} onClick={()=>window.scrollTo({ top: 0})}>Nosotros</Link>
            <Link to={'/menu'} onClick={()=>window.scrollTo({ top: 0})}>Menú</Link>
            <Link to={'contacto'} onClick={()=>window.scrollTo({ top: 0})}>Contacto</Link>
            <Link to={'locacion'} onClick={()=>window.scrollTo({ top: 0})}>Locación</Link>
          </div>          
        </div>
        <div>
          <p>ATENCIÓN AL CLIENTE</p>
          <div className='flex flex-col gap-2 pt-3'>
            <Link className='text-sm' to={'/contacto'} onClick={()=>window.scrollTo({ top: 0})}>
            Contacto
          </Link>
          <Link>            
            <img className='object-cover w-20 h-14' src={libroReclamo} alt='libro de reclamaciones'/>
          </Link>
          </div>          
        </div>
      </div>
      <div className='m-auto text-xs pb-2 text-slate-400'>
        <p>Copyright © 2024 La Morada de Xie Lian - Todos los derechos reservados</p>
      </div>
    </div>
      
    </footer>
  )
}

export default Footer