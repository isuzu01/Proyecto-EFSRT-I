import React from 'react'

const Button = ({title, styles, onclick}) => {
  return (
    <button
      className={`border p-2 text-center rounded-lg text-xl w-48 ${styles}`}
      type='button'
      onClick={onclick}
    >
      {title}
    </button>
  )
}

export default Button