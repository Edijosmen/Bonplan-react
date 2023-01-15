import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../../pages/Home'
import './styles/styles.modules.nav.css'
function Navbar() {
    return (
        <div className=''>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={Home}>Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Quienes Somos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Visitenos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
