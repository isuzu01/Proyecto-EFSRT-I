import React, { useState } from 'react'
import contactoBanner from '../img/locacion-banner.jpg'
import face from '../img/face-color.png'
import insta from '../img/inta-color.png'
import twit from '../img/twit-color.png'
import { Link } from 'react-router-dom'

function Contacto() {
  const [formValues, setFormValues] = useState({
    email: '',
    telef: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Gracias por contactarnos')
    window.location.href = '/'
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const isFormValid = Object.values(formValues).every(value => value !== '');

  return (
    <div>
      <section className="relative -z-10">
        <div
          className="h-96 bg-no-repeat bg-cover flex items-end"
          style={{ backgroundImage: `url(${contactoBanner})` }}
        >
          <h3 className="text-white text-6xl p-10">Contacto</h3>
        </div>
      </section>

      <section className="flex justify-center py-24 bg-slate-100">
        <div className="shadow-2xl w-fit p-10 bg-white rounded-2xl">
          <h1 className="text-center text-4xl pb-10 text-marca-red font-bold">Contactanos</h1>
          <p className="text-center mb-6">puedes visitarnos en nuestras redes sociales</p>
          <div className='flex flex-row justify-center gap-10 transition-all'>
            <Link className='w-[6rem] h-[6rem] hover:w-[10rem] transition-all' to={'https://www.facebook.com/'} target='_blank'>
              <img className='object-contain' src={face} alt='facebook'/>
            </Link>
            <Link className='w-[6rem] h-[6rem] hover:w-[10rem] transition-all' to={'https://www.instagram.com/'} target='_blank'>
              <img className='object-contain' src={insta} alt='instagram'/>
            </Link>
            <Link className='w-[6rem] h-[6rem] hover:w-[10rem] transition-all' to={'https://x.com/'} target='_blank'>
              <img className='object-contain' src={twit} alt='twitter'/>
            </Link>
          </div>
          <p className='text-center mt-10 mb-10'>Contactanos po correo: </p>
          <form className="w-[50rem] mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="nombre">correo:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingrese su nombre"
                  className="border p-2 rounded-md"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telef">Teléfono:</label>
                <input
                  id="telef"
                  name="telef"
                  type="text"
                  placeholder="Ingrese su teléfono"
                  className="border p-2 rounded-md"
                  value={formValues.telef}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`bg-black text-white px-4 py-2 rounded-md hover:bg-marca-red cursor-pointer`}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contacto