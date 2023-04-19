import React, { useState } from 'react';
import '../styles/imgs.form.style.css';
import httpClient from '../../../../services/HttpClient'
import { useNavigate } from 'react-router-dom';

// drag drop file component
export default function DragDropFile({idx}) {
  const [showalert,setshow] = useState(false);
  const [issubmit,setSubmit] = useState(false);
  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  // files sate
  const [filesForm, setFilesForm] = React.useState(null);
  // ref
  const inputRef = React.useRef(null);
  const navigate = useNavigate();
  function handleFiles(files) {
    setFilesForm(files);
  }

  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }

  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  // handle submit images
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("Property_Id", idx);

    for (let i = 0; i < filesForm.length; i++) {
      formData.append('Image', filesForm[i]);
    }

    const head = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    console.log("array",formData);
    httpClient.post('ImgStore', formData, head)
      .then(response => {
        alert(`Great that's work! ${response}`)
      }).catch(error => {
        alert(`That doesn't work! :( ${error}`)
      });
      setSubmit(true);
      setshow(true);
  }
  const handlevolver =()=>{
     // Redirigir a la ruta "/adm"
    window.location.href = navigate("/adm");
    // Recargar la página
    window.location.reload();
  }
  const Alert = () => {
    return (
      <div className="alert alert-image alert-success alert-dismissible fade show" role="alert">
        <button type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handlevolver}
          ></button>
        <div className='conten' >
          <p> <strong>Registro Guardadado Exitosamente!!</strong></p>
        </div>
      </div>
    );
  }
  return (
    <form id="form-file-upload" encType='multipart/form-data' onDragEnter={handleDrag} onSubmit={(e) => {e.preventDefault()}}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div>
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      <button className="btn btn-primary mt-3" disabled={issubmit} onClick={handleSubmit}>Guardar</button>
    {showalert && 
      <Alert></Alert>
    }
    </form>
  );
};
