import { useState } from 'react';
import './App.css';

function App() {
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState("")

  function adicionarNovoItem() {
    setLista([...lista, novoItem])
    setNovoItem("")
  }

  function deletarItem(index) {
    const tmpArray = [...lista]
    tmpArray.splice(index, 1)
    setLista(tmpArray)
  }

  return (
    <div className="container">
      <div className="todoList">
        <input autoFocus
          maxlength="30"
          type="text"
          value={novoItem}
          onChange={e => setNovoItem(e.target.value)}
          placeholder="Digite sua tarefa aqui!" />
        <button className="buttonAdd" onClick={() => adicionarNovoItem()}>
          <i class="fas fa-plus-circle fa-2x"></i>
        </button>
        <div className="list">
          <ul>
            {lista.map((item, index) =>
              <li>
                {item}
                <div className="buttonDel">
                  <button className="buttonDelete" onClick={() => deletarItem(index)}>
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
