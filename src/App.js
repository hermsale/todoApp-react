import logo from './logo.svg';
import './App.css';

// funcion app - citando las propiedades del Componente App 
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* // tomamos lo que nos llegue del componente App y usamos su propiedad saludo */}
          {props.children} 
          
        </a>
      </header>
    </div>
  );
}

export default App;
