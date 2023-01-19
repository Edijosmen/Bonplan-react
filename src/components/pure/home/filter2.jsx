import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles/home.css'
export default function Filter2() {
    const count = useSelector((state) => state.filter)
    console.log("es count",count);
    const [obfilter,setFilter] = useState({
        search:'',
        desde:'',
        hasta:'',
        estado:'',
        tipo:'local',
        nHabitacion:'',
        nBaños:'',
    })
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
  return (
     <div className=''>
         <div className=''>
         <div className='filter2 col-12 col-md-12 col-lg-12 '>
          <div className='row'>
                <div className='col-12 col-md-9 mb-3'>
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
                <Link  className='btn btn-primary ' to={"/lista"}  >Buscar</Link>
                </div>
          </div>
          <div className=''>
              <div className='mb-3 col'>
                    <label className='control-label '>Precio Desde:</label>
                    <input className='form-control  ' placeholder='Desde'
                        value={obfilter.desde} 
                        onChange={e=>{
                            setFilter({
                                ...obfilter,
                                desde: e.target.value
                            });
                        }}
                      />
              </div>
              <div className='mb-3 col'>
                  <label className='control-label'>Precio Haste:</label>
                 <input className='form-control' placeholder='Hasta'
                  value={obfilter.hasta}
                  onChange={e=>{
                            setFilter({
                                ...obfilter,
                                hasta: e.target.value
                            });
                        }} />
              </div>
          </div>
          <div className='row'>
               <div className='align-items-center'>
               <button className='btn btn-primary'>Filtar por Precio</button>
               </div>
          </div>
          <div className='row'>
                <div className='mb-3 col'>
                    <label className='control-label'>Estado del Inmueble</label>
                    <select className='form-select' value={obfilter.estado}
                     onChange={e=>{
                            setFilter({
                                ...obfilter,
                                estado: e.target.value
                            });
                        }}>
                        <option>Venta</option>
                        <option>Arriedo</option>
                    </select>
                </div>
              <div className='mb-3 col'>
                  <label className='control-label'>Tipo de Inmueble</label>
                  <select className='form-select' 
                        value={obfilter.tipo}
                        onChange={e=>{
                            setFilter({
                                ...obfilter,
                                tipo: e.target.value
                            });
                        }}>
                       
                        <option>local</option>
                        <option>casa</option>
                  </select>
              </div>
              
          </div>
          {obfilter.tipo!=="local"  &&
            <div>
            <div className='row'>
           <span className='text-start'>Habitaciones</span>
              <div className='mb-3 col'>
              
                  <div class="form-check form-check-inline mb-3 mt-3" onClick={()=>obtenerdatoH(1)}>
                        {obfilter.nHabitacion===1 ? <span className='span-true'>1</span>:<span className='span'>1</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3 " onClick={()=>obtenerdatoH(2)}>
                        {obfilter.nHabitacion===2 ? <span className='span-true'>2</span>:<span className='span'>2</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoH(3)}>
                        {obfilter.nHabitacion===3 ? <span className='span-true'>3</span>:<span className='span'>3</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoH(4)}>
                       {obfilter.nHabitacion===4 ? <span className='span-true'>4</span>:<span className='span'>4</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoH(5)}>
                       {obfilter.nHabitacion===5 ? <span className='span-true'>5+</span>:<span className='span'>5</span>}
                  </div>
              </div>
              
          </div>
          <div className='row'>
          <span className='text-start'>Baños</span>
              <div className='mb-3 col'>
              
              <div class="form-check form-check-inline mb-3 mt-3" onClick={()=>obtenerdatoB(1)}>
                        {obfilter.nBaños===1 ? <span className='span-true'>1</span>:<span className='span'>1</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3 " onClick={()=>obtenerdatoB(2)}>
                        {obfilter.nBaños===2 ? <span className='span-true'>2</span>:<span className='span'>2</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoB(3)}>
                        {obfilter.nBaños===3 ? <span className='span-true'>3</span>:<span className='span'>3</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoB(4)}>
                       {obfilter.nBaños===4 ? <span className='span-true'>4</span>:<span className='span'>4</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoB(5)}>
                       {obfilter.nBaños===5 ? <span className='span-true'>5+</span>:<span className='span'>5</span>}
                  </div>
              </div>
              
          </div>
            </div>

          }
          
      </div>
         </div>
     </div>
  )
}
