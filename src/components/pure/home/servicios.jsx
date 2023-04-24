import React from 'react'
import './styles/home.css'

export default function Servicios() {
  return (
    <div>
     <div>
     <h2>Servicios</h2>
     </div>
      <div className='servicio'>
        <div className='col-12 col-md-6 col-lg-6'>
          <div className='venta'>
            <img src="img/icons/compra.png"></img>
            <h5>Venta</h5>
            <p className='col-12 '>Promocionamos su inmueble en los portales WEB más reconocidos en sector  inmobiliario a nivel nacional e irternacional.</p>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6'>
          <div className='compra'>
            <img src="img/icons/venta.png"></img>
            <h5>Compra</h5>
            <p className='col-12  '>
            Convenios con Multinacionales y embajadas para la ubicación de altos ejecutivos en nuestros inmuebles en proceso de renta.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
