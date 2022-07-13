import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css';
import './views/ItemListContainer'
import ItemListContainer from './views/ItemListContainer';


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo='Próximamente catálogo'/>
      </header>
    </div>
  )
}

export default App;
