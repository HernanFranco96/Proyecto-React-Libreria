import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css';
import './views/ItemListContainer'
import ItemListContainer from './views/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
        <ItemListContainer saludo='Próximamente catálogo'/>
      </header>
      <ItemCount stock={5} inicio={1}/>
    </div>
  )
}

export default App;
