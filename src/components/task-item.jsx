import { useEffect, useRef, useState } from 'react';

const TaskItem = ({ task, changeTask }) => {
  const { type, body } = task;

  const [activeMode, setActiveMode] = useState(false);
  const [taskBody, setTaskBody] = useState(body);
  const inputRef = useRef(null);

  const typeClass = type ? `task--${type}` : '';
  const activeClass = activeMode ? `task--active` : '';

  const onButtonClick = (evt) => {
    evt.preventDefault();
    setActiveMode(true);
  };

  const onInputChange = (evt) => {
    setTaskBody(evt.target.value);
  };

  const onInputKeyDown = (evt) => {
    if (evt.keyCode !== 13) {
      return;
    }

    changeTask({ ...task, body: taskBody });
    setActiveMode(false)
  };

  useEffect(() => inputRef.current.focus(), [activeClass])

  return (
    <div className={`taskboard__item task ${typeClass} ${activeClass}`}>
      <div className="task__body">
        <p className="task__view">{body}</p>
        <input
          className="task__input"
          type="text"
          value={taskBody}
          ref={inputRef}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
        />
      </div>
      <button
        className="task__edit"
        type="button"
        aria-label="Изменить"
        onClick={onButtonClick}
      ></button>
    </div>
  );
};

export default TaskItem;
