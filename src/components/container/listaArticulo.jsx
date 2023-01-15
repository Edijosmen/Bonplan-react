import React, { useEffect } from 'react'
import Filter from '../pure/home/filter'
import HttpCliente from '../../services/HttpClient'
import ArticuloCardList from './articuloCard'
import Filter2 from '../pure/home/filter2'
export default function ListaArticulo() {

   
  return (
    <div>
      <div className='listaArticulo'>
        <div className='row'>
            <div className='col-12 col-md-4 col-lg-4'>
                <Filter2></Filter2>
            </div>
            <div className='col-12 col-md-4 col-lg-8'>
                <ArticuloCardList></ArticuloCardList>
            </div>
        </div>
      </div>
    </div>
  )
}
