import { Field,Form, Formik,ErrorMessage } from 'formik';
import React from 'react'
import httpclient from '../../services/HttpClient'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Login() {
    const [showAlert, setShowAlert] = useState(false); 
    const navigate = useNavigate();
    const login ={
        usuario: '',
        password: '', 
    }
    const  Alert = () => {
   
        return (
        <div className="alert alert-pl alert-danger alert-dismissible fade show" role="alert">
            <button type="button" 
            className="btn-close" 
            onClick={()=>setShowAlert(false)}  
            data-bs-dismiss="alert" 
            aria-label="Close"></button>
            <div className='conten'>
            <p>Credenciales inconrrectos,revise tu <strong>Usuario</strong> o <strong>Password</strong></p>
            </div>
           
        </div>
        );
   
    }
    return (
        <div>
            <div className='login'>
                <h2>sin up</h2>
                <Formik 
                    initialValues={login}
                    validate={(values) => {
                        let errors ={};
                        if(!values.usuario){
                            errors.usuario ="el usuario es requerido"
                        }
                        if(!values.password){
                            errors.password ="el Password es requerido"
                        }
                        return errors
                    }}
                    onSubmit={(values)=>{
                        httpclient.post("Auth/login",values).then((response) =>{       
                          if(response.status ===200){
                            console.log(response);
                            localStorage.setItem("Token",response.data);
                            navigate("/adm");
                          }
                            
                        },(errors) =>{
                            if(errors.response.status ===400){
                                setShowAlert(true);
                            }
                        })
                        }}>
                    {({errors})=>(
                       <Form className='col-xs-12 col-md-4 col-lg-4'>
                            <div className='mb-3'>
                                <label className='form-label align-items-end' htmlFor='usuario'>Usuario</label>
                                <Field className='form-control' type='text' name='usuario' ></Field>
                                <ErrorMessage name='usuario' component={()=> (
                                    <div className='error'>{errors.usuario}</div>
                                )}/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-laber' htmlFor='password'>Password</label>
                                <Field className='form-control' type='password' name='password'></Field>
                                <ErrorMessage name='password' component={()=> (
                                    <div className='error'>{errors.password}</div>
                                )}/>
                            </div>
                            <button type='submit'>login </button>
                       </Form>
                    )}
                </Formik>
                {showAlert && 
                <Alert></Alert>
                 }
            </div>
        </div>
    )
    
}

  
export default Login
