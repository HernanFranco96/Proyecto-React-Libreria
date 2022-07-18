import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer saludo='Próximamente catálogo'/>} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
      
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </header>
    </BrowserRouter>
  )
}

export default App;
