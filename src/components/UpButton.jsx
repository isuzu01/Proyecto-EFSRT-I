import React from "react";
import arrowUp from '../img/up-arrow.png'

const UpButton = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      className="rounded-full grid place-content-center size-20 text-2xl bg-marca-green text-white fixed bottom-1 right-1"
      onClick={handleClick}
    >
      <img src={arrowUp} alt="arriba"/>
    </button>
  )
}

export default UpButton
