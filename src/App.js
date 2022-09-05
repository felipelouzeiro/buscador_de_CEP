import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className='containerInput'>
        <input
          type='text'
          placeholder="Digite um CEP"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color='#fff' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 98957000</h2>

        <span>Rua Tarará</span>
        <span>Complemento: Tarará</span>
        <span>Bairro Tereré</span>
        <span>São Paulo</span>
      </main>
    </div>
  );
}

export default App;
