import { TaskType } from '../const';
import TaskItem from './task-item';

const TaskList = ({ tasks, draggedTask, changeTask, dragStartTask, dragEndTask, dragEnterTask }) => {
  return (
    <div className="taskboard__list">
      {tasks.length ? (
        [...tasks].map((task) => (
          <TaskItem
            task={task}
            isDragging={draggedTask && task.id === draggedTask.id}
            changeTask={changeTask}
            dragStartTask={dragStartTask}
            dragEnterTask={dragEnterTask}
            dragEndTask={dragEndTask}
            key={task.id}
          />
        ))
      ) : (
        <TaskItem task={{ type: TaskType.EMPTY, body: 'Перетащите задачу' }} />
      )}
    </div>
  );
};

export default TaskList;
