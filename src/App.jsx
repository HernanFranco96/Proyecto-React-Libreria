import NavBar from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

function App() {
  return ( 
    <BrowserRouter>
      <CartContextProvider>
        <header className="App-header">
          <NavBar/>
          <Routes>
            <Route path='*' element={<Navigate to='/'/>} />
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </header>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
