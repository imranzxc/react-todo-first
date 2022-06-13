import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Buy bananas',
      favorite: false,
    },
    {
      text: 'Sell a house',
      favorite: false,
    },
    {
      text: 'Learn JavaScript',
      favorite: false,
    },
  ]);

  const deleteTodo = (idx) => {
    const filtered = todos.filter((todo, index) => {
      if (index === idx) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ]);
    setText('');
  };

  const newTodos = todos.map((todo, index) => {
    return (
      <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
        <div className="favorite">
          <button onClick={() => makeFavorite(index)}>⭐️</button>
        </div>
        <div className="todo-text">{todo.text}</div>
        <div className="actions">
          <button onClick={() => deleteTodo(index)}>❌</button>
        </div>
      </div>
    );
  });
  return (
    <div className="app">
      <div className="header">Список дел</div>
      <div className="form">
        <input
          type="text"
          placeholder="Введите текст..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <div className="todos">{newTodos}</div>
    </div>
  );
}

export default App;
