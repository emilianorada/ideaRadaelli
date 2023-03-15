import React from 'react'

const MostrarError = (estado, mensaje) => {
  return (
    <div>
    {estado ? document.getElementById('resultado').html("<p class='p-3 mb-2 bg-danger text-white text-center'>" + mensaje + "</p>") : document.getElementById('resultado').html("")}     
    </div>
  )
}

export default MostrarError



