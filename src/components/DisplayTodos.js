import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  addTodos,
  completeTodos,
  activeTodos,
  removeTodos,
  updateTodos,
} from '../redux/reducer';
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    activeTodo: (id) => dispatch(activeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState('all');

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort('all')}>All</button>
        <button onClick={() => setSort('active')}>Active</button>
        <button onClick={() => setSort('completed')}>Completed</button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === 'all'
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                  activeTodo={props.activeTodo}
                />
              );
            })
          : null}

        {props.todos.length > 0 && sort === 'active'
          ? props.todos
              .map((item) => {
                return (
                  item.status === 0 && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                      activeTodo={props.activeTodo}
                    />
                  )
                );
              })
          : null}

        {props.todos.length > 0 && sort === 'completed'
          ? props.todos
              .map((item) => {
                return (
                  item.status === 1 && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                      activeTodo={props.activeTodo}
                    />
                  )
                );
              })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
