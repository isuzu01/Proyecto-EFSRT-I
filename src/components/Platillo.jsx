import React from 'react'
import { Link } from 'react-router-dom'


const Platillo = ({categ}) => {
  return (    
    <div className='flex flex-row justify-center flex-wrap w-4/6 gap-20'>
      {categ.map((plato, index) => (
        <article
            key={index} 
            className='bg-white shadow-2xl'>
          <Link
            className='p-3 flex flex-col justify-around border-4 rounded-xl border-marca-red w-60 h-96 cursor-pointer'
            to={`/${plato.categoria}/` + plato.titulo}
            id={plato.titulo}
          >
            <div className='flex justify-center h-[200px] w-full'>
              <img 
              className='object-fill '
                src={plato.imagen} 
                alt={plato.titulo}
              />
            </div>
            <div className='flex flex-col pl-4'>
              <p className='text-sm italic'>{plato.categoria}</p>
              <h4 className='truncate font-bold text-xl text-marca-red'>{plato.nombre}</h4>
              <h3 className='text-2xl font-bold text-marca-geen'>/S. {plato.precio}</h3>
            </div>
          </Link>
        </article>
          ))}
    </div>
  )
}

export default Platillo