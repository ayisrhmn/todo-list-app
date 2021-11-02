import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodos} from '../redux/reducer';
import {GoPlus} from 'react-icons/go';
import moment from 'moment';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [nextId, setNextId] = useState(1);

  const add = () => {
    setNextId(nextId + 1);
    if (title === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: nextId,
        title: title,
        description: desc,
        status: 0,
        createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm'),
      });
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="addTodos">
      <div className="inputTodos">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="todo-input"
          placeholder="Title"
          value={title}
        />
        <br />
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          className="todo-input"
          placeholder="Description"
          value={desc}
        />
      </div>

      <button className="add-btn" onClick={() => add()}>
        <GoPlus />
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
