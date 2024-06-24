import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import acogedor from "../img/acogedor.webp";
import banner from "../img/inicio-banner.webp";
import innovador from "../img/innovador.webp";
import logo_moradaXieLian from "../img/logo-morada-xieLian.png";
import tradicional from "../img/tadicional.webp";
import arrowDownIcon from '../img/arrow-down.png'

const Inicio = () => {
  return (
    <div>
      <section className="">
        <div
          className=" h-screen w-full inset-0 -z-10 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="flex flex-col justify-end gap-20 items-center h-full text-white text-center">
            <div className="w-3/4 flex flex-col gap-14">
              <h1 className="text-9xl font-black">
                El verdadero sabor asiático
              </h1>
              <p className="text-3xl">¡Encuentra tu platillo favorito!</p>
            </div>
            <div className="flex flex-row gap-10">
              <Link to={"/menu"}>
                <Button title={"Menú"} styles={"bg-[#ffffff50] hover:bg-[#ffffff90]"} />
              </Link>
              <Link to={"/reserva"}>
                <Button title={"reserva"} styles={"bg-[#ffffff50] hover:bg-[#ffffff90]"} />
              </Link>
            </div>
            <div className="pb-5">
              <a href="#morada">
                ver mas
                <div className="flex flex-col justify-center">
                  <img src={arrowDownIcon} alt="ver mas"/>
                </div>                
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white" id="morada">
        <div className="flex flex-col justify-center items-center py-14 w-full m-aut text-black text-2xl">
          <div className="w-80 pb-6">
            <img src={logo_moradaXieLian} alt="logo_moradaXieLian" />
          </div>
          <p className=" w-[50rem] text-center text-lg">
            Comida china gourmet realizada bajo altos estándares de calidad,
            supervisada a detalle por nuestros experimentados líderes
            culinarios.
          </p>
        </div>
      </section>
      <section className="bg-gray-900 text-slate-200">
        <div className="flex flex-row justify-center gap-10 items-center h-[70vh] text-center">
          <article className="w-96 h-[34rem]">
            <div className="flex justify-center">
              <img
                className="object-cover rounded-full w-80 h-80"
                src={tradicional}
                alt="tracicional"
              />
            </div>
            <div className="h-1/3 pt-8">
              <h3 className="pb-8 text-3/XC?JWWWxl">TRADICIONAL</h3>
              <p>
                En La morada de Xie Lian mantenemos el espíritu tradicional de
                los platos que pasaron de generación en generación y que hoy les
                ofrecemos junto a nuestras nuevas creaciones.
              </p>
            </div>
          </article>
          <article className="w-96 h-[34rem]">
            <div className="flex justify-center">
              <img
                className="object-cover rounded-full w-80 h-80"
                src={innovador}
                alt="innovador"
              />
            </div>
            <div className="h-1/3 pt-8">
              <h3 className="pb-8 text-3/XC?JWWWxl">INNOVADOR</h3>
              <p>
                Siempre innovando, nos caracterizamos por crear nuevos platos y
                sabores.
              </p>
            </div>
          </article>
          <article className="w-96 h-[34rem]">
            <div className="flex justify-center">
              <img
                className="object-cover rounded-full w-80 h-80"
                src={acogedor}
                alt="acogedor"
              />
            </div>
            <div className="h-1/3 pt-8">
              <h3 className="pb-8 text-3/XC?JWWWxl">ACOGEDOR</h3>
              <p>
                Disfrute una deliciosa experiencia junto a nosotros, sabores y
                colores en el mejor ambiente y con el trato personalizado que ya
                nos caracteriza. Estamos para servirlos con mucha dedicación y
                cariño.
              </p>
            </div>
          </article>
        </div>        
      </section>
      <section>
        <div className="flex justify-center py-10 border-t">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/Jo8IyrPPVGI"
            title="video"
          ></iframe>
          <div>
            <p>

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
