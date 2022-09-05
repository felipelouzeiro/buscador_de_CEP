import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { api } from './services/api';
import './styles.css';

function App() {
  const [input, setInput] = useState();
  const [cep, setCep] = useState({});

  async function handleSearch(e) {
    e.preventDefault();

    if (input === '') {
      alert('Preencha algum CEP');
    }

    try {
      const response = await api.get(`${input}/json/`);
      setCep(response.data);
      setInput('');
    } catch (error) {
      alert('Ops erro ao buscar informações.');
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <form onSubmit={(e) => handleSearch(e)} className="containerInput">
        <input
          type="text"
          placeholder="Digite um CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </form>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          {cep.logradouro && <span>Logradouro: {cep.logradouro}</span>}
          {cep.complemento && <span>Complemento: {cep.complemento}</span>}
          {cep.complemento && <span>Bairro: {cep.bairro}</span>}
          {cep.ddd && <span>DDD: {cep.ddd}</span>}
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
