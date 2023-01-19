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
        estado:'',
        tipo:'local',
        nHabitacion:'',
        nBaños:'',
    })
    let  filter ={
        search:'holaa',
    }
    const obtenerdatoH = (num) =>{
        setFilter({
            ...obfilter,
                nHabitacion:num})
    }
    const obtenerdatoB = (num) =>{
        setFilter({
            ...obfilter,
                nBaños:num})
    }
    console.log(obfilter);
    function searchPro (){
        console.log(" ssisiisisisi");
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
                              <option>Venta</option>
                              <option>Arriedo</option>
                          </select>
                      </div>
                      <div className='col-12 col-md-6 mb-3'>
                          <input className='form-control ' type="search"
                              value={obfilter.search}
                              placeholder='Buscar..'
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
                      <div className='col-12 col-md-2'>
                          <p className='btn btn-primary 'onClick={searchPro} >Buscardd</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
