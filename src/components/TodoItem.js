import React, {useRef, useState} from 'react';
import {AiFillDelete, AiFillEdit, AiOutlineFieldTime} from 'react-icons/ai';
import {IoCheckmarkDoneSharp, IoClose} from 'react-icons/io5';

const TodoItem = (props) => {
  const {item, updateTodo, removeTodo, completeTodo, activeTodo} = props;
  const inputRef = useRef(true);
  const [inputOff, setInputOff] = useState(true);
  const [textareaOff, setTextareaOff] = useState(true);

  const inputFocus = () => {
    setInputOff(false);
  };

  const textareaFocus = () => {
    setTextareaOff(false);
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({id, item: value});
      setInputOff(true);
      setTextareaOff(true);
    }
  };

  return (
    <li key={item.id} className="card">
      {item.status === 0 && (
        <div className="label">
          <span className="active">Active</span>
        </div>
      )}
      {item.status === 1 && (
        <div className="label">
          <span className="completed">Completed</span>
        </div>
      )}
      <input
        type="text"
        disabled={inputOff}
        defaultValue={item.title}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <textarea
        disabled={textareaOff}
        defaultValue={item.description}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="action">
        <div className="created-at">
          <p className="icon-time">
            <AiOutlineFieldTime />
          </p>
          <p className="text-time">{item.createdAt}</p>
        </div>
        <div className="btn-action">
          <button
            onClick={() => {
              inputFocus();
              textareaFocus();
            }}>
            {' '}
            <AiFillEdit />{' '}
          </button>
          {item.status === 0 && (
            <button
              style={{color: 'green'}}
              onClick={() => completeTodo(item.id)}>
              <IoCheckmarkDoneSharp />
            </button>
          )}
          {item.status === 1 && (
            <button
              style={{color: '#3689d6'}}
              onClick={() => activeTodo(item.id)}>
              <IoClose />
            </button>
          )}
          {item.status === 0 && (
            <button style={{color: 'red'}} onClick={() => removeTodo(item.id)}>
              {' '}
              <AiFillDelete />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
