import React, {useState ,useEffect} from 'react'
import httpClient from '../../../../services/HttpClient'

export default function ModalUpdate({IDX, target, action,datos}) {
    const [updateState, setupdate] = useState({
        typeContract:datos.typeContract,
        state:datos.state
    });
    
    useEffect(() => {
        setupdate({
          typeContract: datos.typeContract,
          state: datos.state
        });
      }, [datos]);
  
  const handleUpdate = () => {
    const body ={
        id: IDX,
        typeContract: parseInt(updateState.typeContract) ,
        state: parseInt(updateState.state)
    }
    console.log("body",body)
    httpClient.put("Property/Update",body)
    .then(response => {
      if(response.status === 200){
        var p =document.getElementById("response"); 
        p.innerHTML="Datos Actualizados!";
      }
    }).catch(error => {
      alert(`That doesn't work! :( ${error}`)
    });
    window.location.reload();
  }

  const handleSelectChangerContracto = (e)=>{
    setupdate({...updateState ,typeContract:e.target.value});
  }
  const handleSelectChangerState = (e)=>{
    setupdate({...updateState ,state:e.target.value});
  };

  return (
    <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Actualizar Registro</h5>
           
          </div>
          <div className="modal-body">
                  
                <select value={updateState.typeContract} onChange={handleSelectChangerContracto}>
                    {updateState.typeContract === 0 ? 
                        <>
                            <option value="0">Arriendo</option>
                            <option value="1">Venta</option>
                        </>
                        :
                        <>
                            <option value="1">Venta</option>
                            <option value="0">Arriendo</option>
                        </>
                    }
                </select>

                <select value={updateState.state} onChange={handleSelectChangerState}>
                    {updateState.state === 0 ? 
                        <>
                            <option value="0">Disponible</option>
                            <option value="1">no Disponible</option>
                        </>
                        :
                        <>
                            <option value="1">No Disponible</option>
                            <option value="0">Disponible</option>
                        </>
                    }
                </select>
                <p id='response'></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {action==="update" && <button type="button" className="btn btn-danger" onClick={handleUpdate}>Guardar</button>}
          </div>
        </div>
      </div>
    </div>
  )
}
