import './css/style.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>
        Todo App List App by{' '}
        <a
          href="https://github.com/ayisrhmn/todo-list-app"
          target="_blank"
          style={{color: 'white'}}>
          Ayisrhmn
        </a>
      </h1>
      <div>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
