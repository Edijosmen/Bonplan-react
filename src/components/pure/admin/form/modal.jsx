import React from 'react'
import httpClient from '../../../../services/HttpClient'
import './styles/producto.css'
export default function Modal({title, body, target, idx, action}) {
  const handleDelete = () => {
    httpClient.delete(`Property/Delete?id=${idx}`)
    .then(response => {
      alert(`Great that's work! ${response}`)
    }).catch(error => {
      alert(`That doesn't work! :( ${error}`)
    });
  }
  return (
    <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {action==="delete" && <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>}
          </div>
        </div>
      </div>
    </div>
  )
}
