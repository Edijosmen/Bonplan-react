import React from 'react'
import httpClient from '../../../../services/HttpClient'

export default function Modal({title, body, target, idx}) {
  const handleDelete = () => {
    httpClient.delete(`Property/Delete?id=${idx}`)
    .then(response => {
      alert(`Great that's work! ${response}`)
    }).catch(error => {
      alert(`That doesn't work! :( ${error}`)
    });
  }
  return (
    <div class="modal fade" id={target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {body}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {target==="delete" && <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>}
          </div>
        </div>
      </div>
    </div>
  )
}
