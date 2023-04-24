
import { BrowserRouter as Router,Route,Link,Routes,Navigate} from 'react-router-dom';
import './App.css';

import Login from './components/form/login'
import Footer from './components/pure/footer/footer';
import ArticuloDetalle from './components/container/articuloDetalle';
import Navbar from './components/pure/navbar/navbar';
import Home from './pages/Home';
import ListaArticulo from './components/container/listaArticulo';
import Somos from './components/pure/view/somos';
import Visitenos from './components/pure/view/visitenos';
import Contacto from './components/pure/view/contacto';
import Panel from './components/pure/admin/panel';
import Producto from './components/pure/admin/form/producto';
import UpdProducto from './components/pure/admin/form/updProducto';

import Protected from './router/Protected';


function App() {
  
  return (
    <div className="App">
       <Router>
       <Navbar></Navbar> 
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/detalle/:propertyId' element={<ArticuloDetalle/>} />
          <Route path='/lista' element={<ListaArticulo/>} />
          <Route path='/nosotros' element={<Somos/>} />
          <Route path='/visitenos' element={<Visitenos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>   
          <Route element={<Protected />}>
            <Route path='/adm' element={<Panel />} />
            <Route path='/adm/new-producto' element={<Producto />} />
            <Route path='/upd/:propertyId' element={<UpdProducto />} />
          </Route>
        </Routes>
       </Router>
       <Footer></Footer>
    </div>
  );
}

export default App;
