import { Formik } from 'formik';
import React from 'react'

function Login() {
    const login ={
        usuario: '',
        password: '', 
    }
   
    return (
        <div>
            <div className='row justify-content-center'>
                <h2>sin up</h2>
                <Formik 
                    initialValues={login}
                    onSubmit={()=>{
                        console.log('formulario enviado');
                    }}>
                    {({handleSubmit})=>(
                       <form className='col-xs-12 col-md-4 col-lg-4' onSubmit={handleSubmit} >
                            <div className='mb-3'>
                                <label className='form-label align-items-end' htmlFor='nombre'>Usuario</label>
                                <input className='form-control' type='text' name='nombre'></input>
                            </div>
                            <div className='mb-3'>
                                <label className='form-laber' htmlFor='nombre'>Password</label>
                                <input className='form-control' type='password' name='nombre'></input>
                            
                            </div>
                            <button type='submit'>login</button>
                       </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
