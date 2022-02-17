import { TaskGroupType, TaskType } from '../const';
import TaskItem from './task-item';

const TaskList = ({
  type,
  tasks,
  draggedTask,
  draggedCopyTask,
  changeTask,
  dragStartTask,
  dragEndTask,
  dragEnterTask,
}) => {
  return (
    <div className="taskboard__list">
      {tasks.length ? (
        [...tasks].map((task) => (
          <TaskItem
            task={task}
            isDragged={draggedTask && task.id === draggedTask.id}
            isDraggedCopy={draggedCopyTask && task.id === draggedCopyTask.id}
            changeTask={changeTask}
            dragStartTask={dragStartTask}
            dragEnterTask={dragEnterTask}
            dragEndTask={dragEndTask}
            key={task.id}
          />
        ))
      ) : type === TaskGroupType.BACKET ? (
        <TaskItem task={{ type: TaskType.EMPTY, body: 'Корзина пуста' }} />
      ) : (
        <TaskItem task={{ type: TaskType.EMPTY, body: 'Перетащите задачу' }} />
      )}
    </div>
  );
};

export default TaskList;
