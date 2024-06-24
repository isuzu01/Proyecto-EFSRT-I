import React, { useState } from "react";
import menuBanner from "../img/locacion-banner.jpg";
import Platillo from "../components/Platillo";
import sopas from "../data/sopasData";
import noodles from "../data/noodlesData";
import postres from "../data/postresData";

const Menu = () => {
  const [verContenido, setVerContenido] = useState("sopas");
  const [botonActivo, setBotonActivo] = useState("sopas");
  const mostrarContenido = (id) => {
    setVerContenido(id);
    setBotonActivo(id);
  };
  return (
    <div className="text-2xl ">
      <section className="relative -z-10">
        <div
          className="h-96 bg-no-repeat bg-cover flex items-end"
          style={{ backgroundImage: `url(${menuBanner})` }}
        >
          <h3 className="text-white text-6xl p-10">Menú</h3>
        </div>
      </section>
      <section className="bg-slate-100 py-9">
        <div className="flex justify-center items-center w-full gap-12 pb-10">
          <button
            className={`h-9 hover:text-3xl transition-all ${
              botonActivo === "sopas" ? "text-black text-3xl font-bold border-b-4 border-marca-red" : "text-slate-600"
            }`}
            onClick={() => mostrarContenido("sopas")}
          >
            Sopas
          </button>
          <button
            className={`h-9 hover:text-3xl transition-all ${
              botonActivo === "noodles" ? "text-black text-3xl font-bold border-b-4 border-marca-red" : "text-slate-600"
            }`}
            onClick={() => mostrarContenido("noodles")}
          >
            Noodles y otros
          </button>
          <button
            className={`h-9 hover:text-3xl transition-all ${
              botonActivo === "postres" ? "text-black text-3xl font-bold border-b-4 border-marca-red" : "text-slate-600"
            }`}
            onClick={() => mostrarContenido("postres")}
          >
            Postres
          </button>
        </div>
      </section>
      <section className="flex justify-center w-full bg-slate-100 pb-11">
        <div
          id="sopas"
          className={`contenido flex justify-center w-full ${
            verContenido === "sopas" ? "block" : "hidden"
          }`}
        >
          <Platillo
            categ={sopas}
          />
        </div>

        <div
          id="noodles"
          className={`contenido flex justify-center w-full ${
            verContenido === "noodles" ? "block" : "hidden"
          }`}
        >
          <Platillo
            categ={noodles}
          />
        </div>

        <div
          id="postres"
          className={`contenido flex justify-center w-full ${
            verContenido === "postres" ? "block" : "hidden"
          }`}
        >
          <Platillo
            categ={postres}
          />
        </div>
      </section>
    </div>
  );
};

export default Menu;
