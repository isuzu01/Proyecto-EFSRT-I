import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import postres from '../data/postresData';

const DetallePostre = () => {
  const { postreId } = useParams()
  const menuPostres = postres.find((postre) => postre.titulo === postreId)

  const [cantidad, setCantidad] = useState(1)

  const handleChangeCantidad = (event) => {
    const nuevaCantidad = parseInt(event.target.value)
    setCantidad(nuevaCantidad)
  }

  const handlePedido = () => {
    alert(`Pedido realizado:
      Sopa: ${menuPostres.nombre}
      Cantidad: ${cantidad}
      Precio Total: S/. ${menuPostres.precio * cantidad}`)
      window.location.href ='/'
  }

  if (!menuPostres) {
    return <div>Plato no encontrado</div>
  }

  const precioTotal = menuPostres.precio * cantidad;

  return (
    <div className='flex justify-center py-48 bg-slate-100'>
      <div className='flex flex-row w-fit gap-10 content-center h-fit border-marca-red border-4 items-start bg-white rounded-2xl shadow-2xl'>
        <div>
          <img
            className='object-fit h-[600px] w-[540px]'
            src={menuPostres.imagen}
            alt={menuPostres.titulo}
          />
        </div>
        <div className='flex flex-col justify-between w-[30rem] h-4/5 p-9'>
          <div>
            <p className='text-sm font-light italic'>{menuPostres.categoria}</p>
            <h3 className='text-marca-red font-bold text-5xl pb-7'>{menuPostres.nombre}</h3>
            <p className='text-lg pb-10'>
            <span className='text-sm font-light italic'>ingrdientes</span><br/>
              {menuPostres.ingredientes}
            </p>
            <p className='font-semibold text-4xl'>
              <span className='text-sm font-light italic'>precio unitario <br/></span>
              S/. {menuPostres.precio}
              </p>
          </div>
          <div className='mt-5'>
            <label htmlFor='cantidad' className='text-lg font-semibold'>
              Cantidad:
            </label>
            <input
              type='number'
              id='cantidad'
              name='cantidad'
              min='1'
              value={cantidad}
              onChange={handleChangeCantidad}
              className='ml-2 py-1 px-2 border border-gray-300 rounded'
            />
            <p className='mt-3 font-semibold text-lg'>Precio Total: S/. {precioTotal}</p>
            <button
              onClick={handlePedido}
              className='mt-4 bg-marca-red hover:bg-marca-red-dark text-white font-bold py-2 px-4 rounded'
            >
              Pedir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePostre;
