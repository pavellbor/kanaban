import { TaskGroupType } from '../const';
import TaskList from './task-list';

const TaskGroup = ({
  type,
  title,
  tasks,
  draggedTask,
  draggedCopyTask,
  changeTask,
  dragStartTask,
  dragEnterTaskGroup,
  dragEnterTask,
  dragEndTask,
  cleanBasket,
}) => {
  const onTaskGroupDragEnter = () => {
    dragEnterTaskGroup(type);
  };

  const onButtonClick = () => {
    cleanBasket();
  };

  return (
    <article
      className={`taskboard__group taskboard__group--${type}`}
      onDragEnter={onTaskGroupDragEnter}
    >
      <h3
        className={`taskboard__group-heading taskboard__group-heading--${type}`}
      >
        {title}
      </h3>
      <TaskList
        type={type}
        tasks={tasks}
        draggedTask={draggedTask}
        draggedCopyTask={draggedCopyTask}
        changeTask={changeTask}
        dragStartTask={dragStartTask}
        dragEndTask={dragEndTask}
        dragEnterTask={dragEnterTask}
      />
      {type === TaskGroupType.BACKET && (
        <button
          className="taskboard__button button button--clear"
          type="button"
          onClick={onButtonClick}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15.5374"
              y="5.16638"
              width="1.83333"
              height="14.6667"
              transform="rotate(45 15.5374 5.16638)"
              fill="white"
            />
            <rect
              x="16.8337"
              y="15.5372"
              width="1.83333"
              height="14.6667"
              transform="rotate(135 16.8337 15.5372)"
              fill="white"
            />
          </svg>
          <span>Очистить</span>
        </button>
      )}
    </article>
  );
};

export default TaskGroup;
