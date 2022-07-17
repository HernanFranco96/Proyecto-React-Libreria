import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo='Próximamente catálogo'/>
        <ItemDetailContainer />
      </header>
    </div>
  )
}

export default App;
