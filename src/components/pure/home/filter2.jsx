import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import HttpCliente from '../../../services/HttpClient'
import { setfilters } from '../../../appStore/slices/filters/filtersSlice';
import './styles/home.css'
import { render } from 'react-dom';
import ListaArticulo from '../../container/listaArticulo';
export default function Filter2(props) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.filter)
    console.log("es count",count);
    const [obfilter,setFilter] = useState({
        search:'',
        desde:'',
        hasta:'',
        estado:'',
        tipo:'local',
        nHabitacion:'',
        nBanos:'',
    })
    const obtenerdatoH = (num) =>{
        debugger
        console.log("num",num);
        setFilter({
            ...obfilter,
                nHabitacion:num});
        
        console.log(obfilter);
        dispatch(setfilters(obfilter));
        //props.incrementarContador();
        console.log(obfilter);
    }
    const obtenerdatoB = (num) =>{
        setFilter({
            ...obfilter,
            nBanos:num});
        dispatch(setfilters(obfilter));
        //props.incrementarContador();
        console.log(obfilter);
    }
   
    const prueba =(<ListaArticulo></ListaArticulo>);
    function filterXprecio(){
        dispatch(setfilters(obfilter));
        //props.incrementarContador();
    }
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
               <Link  className='btn btn-primary' to={"/lista"}  onClick={filterXprecio}>Filtar por Precio</Link>
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
                        <option value="1">Arriendo</option>
                        <option value="0">Venta</option>
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
              
                  <div class="form-check form-check-inline mb-3 mt-3" onClick={()=>obtenerdatoH("1")}>
                        {obfilter.nHabitacion==="1" ? <span className='span-true'>1</span>:<span className='span'>1</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3 " onClick={()=>obtenerdatoH("2")}>
                        {obfilter.nHabitacion==="2" ? <span className='span-true'>2</span>:<span className='span'>2</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoH("3")}>
                        {obfilter.nHabitacion==="3" ? <span className='span-true'>3</span>:<span className='span'>3</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoH("4")}>
                       {obfilter.nHabitacion==="4" ? <span className='span-true'>4</span>:<span className='span'>4</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoH("5")}>
                       {obfilter.nHabitacion==="5" ? <span className='span-true'>5+</span>:<span className='span'>5</span>}
                  </div>
              </div>
              
          </div>
          <div className='row'>
          <span className='text-start'>Baños</span>
              <div className='mb-3 col'>
              
              <div class="form-check form-check-inline mb-3 mt-3" onClick={()=>obtenerdatoB("1")}>
                        {obfilter.nBanos==="1" ? <span className='span-true'>1</span>:<span className='span'>1</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3 " onClick={()=>obtenerdatoB("2")}>
                        {obfilter.nBanos==="2" ? <span className='span-true'>2</span>:<span className='span'>2</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoB("3")}>
                        {obfilter.nBanos==="3" ? <span className='span-true'>3</span>:<span className='span'>3</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoB("4")}>
                       {obfilter.nBanos==="4" ? <span className='span-true'>4</span>:<span className='span'>4</span>}
                  </div>
                  <div class="form-check form-check-inline  mb-3 mt-3" onClick={()=>obtenerdatoB("5")}>
                       {obfilter.nBanos==="5" ? <span className='span-true'>5+</span>:<span className='span'>5</span>}
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
