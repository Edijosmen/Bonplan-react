import React, { useEffect, useState } from 'react'
import ArticuloCardList from './articuloCard'
import Filter2 from '../pure/home/filter2'
import './styles/styles.module.container.css'
export default function ListaArticulo() {
  const  [num,setNum] = useState(0);

  const incrementarContador = (e)=>{
    setNum(num+1);  
    
  }
  return (
    <div>
      <div className='listaArticulo'>
            <div className='col-12 col-md-4 col-lg-4'>
                <Filter2 incrementarContador={incrementarContador}></Filter2>
            </div>
            <div className='col-12 col-md-8 col-lg-8'>
                <ArticuloCardList num={num}></ArticuloCardList>
            </div>
            
      </div>
    </div>
  )
}
