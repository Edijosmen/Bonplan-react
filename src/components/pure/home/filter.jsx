import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch } from 'react-redux'

import './styles/home.css'
import { setfilters } from '../../../appStore/slices/filters/filtersSlice'
export default function Filter() {
    const dispatch = useDispatch();
    const [obfilter,setFilter] = useState({
        search:'',
        desde:'',
        hasta:'',
        estado:'0',
        tipo:'local',
        nHabitacion:'',
        nBanos:'',
    })
  
   
    
    function searchPro (){
       
        dispatch(setfilters(obfilter));
        
    }
  return (
      <div className='backgroud'>
          <div className='contenido'>
              <div className='filter col-12 col-md-6 col-lg-6 '>
                  <div className='row'>
                      <div className=' col-12 col-md-4'>

                          <select className='form-select' value={obfilter.estado}
                              onChange={e => {
                                  setFilter({
                                      ...obfilter,
                                      estado: e.target.value
                                  });
                              }}>                             
                              <option value="0">Arriendo</option>
                              <option value="1">Venta</option>
                          </select>
                      </div>
                      <div className='col-12 col-md-6 mb-3'>
                          <input className='form-control ' type="search"
                              value={obfilter.search}
                              placeholder='Buscar..por municipio,departamento,contrato'
                              aria-label='Search'
                              onChange={e => {
                                  setFilter({
                                      ...obfilter,
                                      search: e.target.value
                                  });
                              }} />
                      </div>

                      <div className='col-12 col-md-2'>
                          <Link className='btn btn-primary ' to={"/lista"} onClick={searchPro} >Buscar</Link>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  )
}
