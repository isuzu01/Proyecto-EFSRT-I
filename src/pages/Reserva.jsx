import React, { useState } from 'react';
import reservaBanner from '../img/locacion-banner.jpg';

const Reserva = () => {
  const [formValues, setFormValues] = useState({
    tamanio: '',
    nombre: '',
    fecha: '',
    apellido: '',
    hora: '',
    telef: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('La reserva se realizo con exito')
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
          style={{ backgroundImage: `url(${reservaBanner})` }}
        >
          <h3 className="text-white text-6xl p-10">Reserva</h3>
        </div>
      </section>

      <section className="flex justify-center py-24 bg-slate-100">
        <div className="shadow-2xl w-fit p-10 bg-white rounded-2xl">
          <h1 className="text-center text-4xl pb-10 text-marca-red font-bold">Reserva una mesa</h1>
          <p className="text-center mb-6">Completa la información para reservar la mejor mesa para ti.</p>

          <form className="w-[50rem] mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="tamanio">Tamaño de grupo:</label>
                <select
                  id="tamanio"
                  name="tamanio"
                  className="border p-2 rounded-md"
                  value={formValues.tamanio}
                  onChange={handleChange}
                >
                  <option value="">Seleccione tamaño</option>
                  <option value="1 person">1 persona</option>
                  <option value="2 person">2 personas</option>
                  <option value="3 person">3 personas</option>
                  <option value="4 person">4 personas</option>
                  <option value="5 person">5 personas</option>
                  <option value="6 person">6 personas</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="border p-2 rounded-md"
                  value={formValues.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fecha">Fecha:</label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  className="border p-2 rounded-md"
                  value={formValues.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="apellido">Apellido:</label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Ingrese su apellido"
                  className="border p-2 rounded-md"
                  value={formValues.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="hora">Hora:</label>
                <select
                  id="hora"
                  name="hora"
                  className="border p-2 rounded-md"
                  value={formValues.hora}
                  onChange={handleChange}
                >
                  <option value="">Seleccione hora</option>
                  <option value="12:00 pm - 1:00 pm">12:00 pm - 1:00 pm</option>
                  <option value="2:00 pm - 3:00 pm">2:00 pm - 3:00 pm</option>
                  <option value="4:00 pm - 5:00 pm">4:00 pm - 5:00 pm</option>
                  <option value="6:00 pm - 7:00 pm">6:00 pm - 7:00 pm</option>
                  <option value="8:00 pm - 9:00 pm">8:00 pm - 9:00 pm</option>
                </select>
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
                className={`bg-black text-white px-4 py-2 rounded-md ${isFormValid ? 'hover:bg-marca-red' : 'cursor-not-allowed opacity-50'}`}
              >
                Reservar ahora
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Reserva;
