import React, { useEffect, useState } from 'react'
import httpclient from '../../../services/HttpClient'
import './styles/panel.css'
import Modal from './form/modal'

import { Link } from 'react-router-dom';
import ModalUpdate from './modals/modalUpdate';



export default function Panel() {
  const [productos, setProductos] = useState();
  const [search, setSearch] = useState();
  const [idProperty, setIdProperty] = useState();


  const [dateUpdate, setDateUpdate] = useState({
    referencia: "" ,
    typeContract: 0,
    state: 0
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      httpclient.get(`Property/GetById?propertyId=${e.target.value}`)
        .then(response => {
          setProductos(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      httpclient.get("Property/GetByPage?PageNumber=1&pageSize=10")
        .then(response => {
          setProductos(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    }


  }
  useEffect(() => {
    httpclient.get("Property/GetByPage?PageNumber=1&pageSize=10")
      .then(response => {
        setProductos(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const Alert = () => {
    return (
      <div className="alert alert-panel alert-danger alert-dismissible fade show" role="alert">
        <button type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"></button>
        <div >
          <p> <strong>no se encontraron datos</strong></p>
        </div>

      </div>
    );

  }

  const assingPropertyId = (idx) => {
    setIdProperty(idx);
  }


  const handleUpdate =(referencia,state,contrato)=>{
      setDateUpdate(dateUpdate =>({
        ...dateUpdate,
        referencia: referencia ,
        typeContract: contrato,
        state: state
      }));
  };


  return (
    <main>
      {productos == null && <Alert />}
      <section className='panel ms-5 me-5'>

        <section className='acciones'>
          <input type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={handleSearchChange}
          />

          <Link to={"/adm/new-producto"} className='btn btn-dark'> Nuevo</Link>


        </section>
        <table className='table table-bordered mt-3' >
          <thead>
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Tipo</th>
              <th>estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(productos) ?
                (
                  productos !== null && productos !== undefined && productos.length > 0 ? (
                    productos.map(producto => (

                      <tr key={producto.propertyId}>

                       

                        <th scope="row">{producto.propertyId}</th>
                        <td >{producto.propertyName}</td>
                        <td>

                          {producto.typeContract === 0 ?
                            <>
                              <option value="0">Arriendo</option>
                            </>
                            :
                            <>
                              <option value="1">Venta</option>
                            </>
                          }
                       </td>
                        <td>
                          {producto.state === 0 ?
                            <>
                              <option value="0">Disponible</option>
                            </>
                            :
                            <>
                              <option value="1">No Disponible</option>
                            </>
                          }                       
                        </td>
                        <td>

                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => assingPropertyId(producto.propertyId)}>
                            Delete
                          </button>
                          <button  type='button' className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#updateModal" onClick={()=>handleUpdate(producto.propertyId,producto.state,producto.typeContract)}>Modificar</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>
                        <Alert></Alert>
                      </td>
                    </tr>
                  )
                )
                :
                (
                  productos !== null && productos !== undefined &&
                  <tr>
                    <th scope="row">{productos.propertyId}</th>
                    <td>{productos.propertyName}</td>
                    <td>{productos.typeContract ? "Arriendo" : "Venta"}</td>
                    <td>{productos.state ? "disponible" : "no diponible"}</td>
                    <td>
                      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => assingPropertyId(productos.propertyId)}>
                        Delete
                      </button>

                      <button  type='button' className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#updateModal" onClick={()=>handleUpdate(productos.propertyId,productos.state,productos.typeContract)}>Modificar</button>

                    </td>
                  </tr>
                )
            }

          </tbody>
        </table>
        <Modal title="Delete product" body="Are you sure to delete this product?" target="deleteModal" idx={idProperty} action="delete"/>

      </section>
    {dateUpdate.referencia !=undefined && dateUpdate.state != undefined && dateUpdate.typeContract !=undefined ? <>
      <ModalUpdate 
            IDX ={dateUpdate.referencia}
            target="updateModal"
            action="update"
            datos ={dateUpdate}
            ></ModalUpdate>
            </>:
            <></>
    }

    </main>

  )
}
