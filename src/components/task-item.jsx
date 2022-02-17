import { useEffect, useRef, useState } from 'react';
import { TaskType } from '../const';

const TaskItem = ({
  task,
  isDragged,
  isDraggedCopy,
  changeTask,
  dragStartTask,
  dragEndTask,
  dragEnterTask,
}) => {
  const { type, body } = task;

  const [activeMode, setActiveMode] = useState(false);
  const [taskBody, setTaskBody] = useState(body);
  const inputRef = useRef({});

  const typeClass = type ? `task--${type}` : 'task--empty';
  const activeClass = activeMode ? `task--active` : '';
  const dragClass = isDraggedCopy ? `task--dragged` : '';
  const hiddenClass = isDragged ? `hidden-block` : '';

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
    setActiveMode(false);
  };

  const onTaskDragStart = () => {
    dragStartTask(task);
  };

  const onTaskDragEnd = () => {
    dragEndTask(task);
  };

  const onTaskDragEnter = () => {
    if (isDragged || isDraggedCopy || type === TaskType.EMPTY) {
      return;
    }

    dragEnterTask(task);
  };

  useEffect(() => activeMode && inputRef.current.focus(), [activeClass]);

  return (
    <div
      className={`taskboard__item task ${typeClass} ${activeClass} ${dragClass} ${hiddenClass}`}
      onDragStart={onTaskDragStart}
      onDragEnter={onTaskDragEnter}
      onDragEnd={onTaskDragEnd}
      draggable={type !== TaskType.EMPTY}
    >
      <div className="task__body">
        <p className="task__view">{body}</p>
        {type !== TaskType.EMPTY && (
          <input
            className="task__input"
            type="text"
            value={taskBody}
            ref={inputRef}
            onChange={onInputChange}
            onKeyDown={onInputKeyDown}
          />
        )}
      </div>
      {type !== TaskType.EMPTY && (
        <button
          className="task__edit"
          type="button"
          aria-label="Изменить"
          onClick={onButtonClick}
        ></button>
      )}
    </div>
  );
};

export default TaskItem;
