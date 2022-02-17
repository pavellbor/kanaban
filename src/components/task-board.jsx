import { useState } from 'react';
import { TaskGroupType } from '../const';
import TaskGroup from './task-group';

const TaskBoard = ({
  taskGroups,
  tasks,
  changeTask,
  moveTask,
  removeTasks,
  replaceTask,
}) => {
  const [draggedEnterTaskGroup, setDraggedEnterTaskGroup] = useState(null);
  const [draggedEnterTask, setDraggedEnterTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedCopyTask, setDraggedCopyTask] = useState(null);

  const dragEnterTaskGroup = (taskGroupType) => {
    setDraggedEnterTaskGroup(taskGroupType);
    setDraggedCopyTask({ ...draggedCopyTask, type: taskGroupType });

    if (!tasks.find((task) => task.type === taskGroupType)) {
      moveTask(draggedCopyTask, null, draggedEnterTaskGroup);
    }
  };

  const dragStartTask = (task) => {
    setDraggedTask(task);
    setDraggedCopyTask({
      ...task,
      id: Date.now(),
    });
  };

  const dragEndTask = () => {
    if (draggedEnterTask) {
      replaceTask(draggedTask, draggedCopyTask);
    }


    setDraggedTask(false);
    setDraggedCopyTask(false);
  };

  const dragEnterTask = (task) => {
    if (task.id === draggedTask.id) {
      return;
    }

    setDraggedEnterTask(task);
    moveTask(draggedCopyTask, draggedEnterTask);
  };

  const cleanBasket = () =>
    removeTasks(tasks.filter((task) => task.type === TaskGroupType.BACKET));

  return (
    <section className="taskboard">
      <h2 className="visually-hidden">Ваши задачи:</h2>
      {taskGroups.map((taskGroup) => (
        <TaskGroup
          {...taskGroup}
          tasks={tasks.filter((task) => task.type === taskGroup.type)}
          draggedTask={draggedTask}
          draggedCopyTask={draggedCopyTask}
          changeTask={changeTask}
          dragStartTask={dragStartTask}
          dragEnterTaskGroup={dragEnterTaskGroup}
          dragEnterTask={dragEnterTask}
          dragEndTask={dragEndTask}
          cleanBasket={cleanBasket}
          key={taskGroup.type}
        />
      ))}
    </section>
  );
};

export default TaskBoard;
