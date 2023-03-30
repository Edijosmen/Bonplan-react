
import { BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import './App.css';

import Login from './components/form/login'
import Footer from './components/pure/footer/footer';
import ArticuloDetalle from './components/container/articuloDetalle';
import Navbar from './components/pure/navbar/navbar';
import Home from './pages/Home';
import ListaArticulo from './components/container/listaArticulo';
import Somos from './components/pure/somos/somos';
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
        </Routes>
       </Router>
       <Footer></Footer>
    </div>
  );
}

export default App;
