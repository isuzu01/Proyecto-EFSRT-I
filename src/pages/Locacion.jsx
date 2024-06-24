import React from 'react'
import locacionBanner from '../img/locacion-banner.jpg'

const Locacion = () => {
  return (
    <div className=''>
      <section>
        <div className='flex items-end h-96 bg-no-repeat bg-cover' style={{backgroundImage: `url(${locacionBanner})`}}>
          <h3 className='text-white text-6xl p-10'>
            Locación
          </h3>
        </div>
      </section>
      <section className='flex justify-center py-24 bg-slate-100'>
        <div className='shadow-2xl w-fit p-10 bg-white rounded-2xl'>
          <h1 className='text-center text-4xl pb-10 text-marca-red font-bold'>Nos puedes encontrar en:</h1>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col gap-4 justify-center'>
              <p>Te esperamos</p>
              <p>
                lun - Vie 11:00 a.m - 11:00 p.m <br/>
                sab y dom 1:00 p.m - 10:00 p.m
              </p>
              <p>
                Av. Aviación 3923 <br/>
                Av. Aviación 3923, Lima 15038
              </p>
              <p>
                Llamanos: <br/>
                +51 9978 465 132
              </p>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.3288917285504!2d-77.00126150134322!3d-12.116052586488479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e581e7f09d%3A0x3dbc765699748dcd!2sAv.%20Aviaci%C3%B3n%203923%2C%20Lima%2015038!5e0!3m2!1sen!2spe!4v1718942136293!5m2!1sen!2spe" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='locacion'></iframe>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Locacion