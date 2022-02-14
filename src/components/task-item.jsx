const TaskItem = ({ task }) => {
  const { type, body } = task;
  const typeClass = type ? `task--${type}` : '';

  return (
    <div className={`taskboard__item task ${typeClass}`}>
      <div className="task__body">
        <p className="task__view">{body}</p>
        <input
          className="task__input"
          type="text"
          value="Название первой задачи"
        />
      </div>
      <button
        className="task__edit"
        type="button"
        aria-label="Изменить"
      ></button>
    </div>
  );
};

export default TaskItem;
