import { useState } from 'react';
import TaskGroup from './task-group';

const TaskBoard = ({ taskGroups, tasks, changeTask, moveTask }) => {
  const [draggedEnterTaskGroup, setDraggedEnterTaskGroup] = useState(null);
  const [draggedEnterTask, setDraggedEnterTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);

  const dragEnterTaskGroup = (taskGroupType) => {
    setDraggedEnterTaskGroup(taskGroupType);
  };

  const dragStartTask = (task) => {
    setDraggedTask(task);
  };

  const dragEndTask = () => {
    console.log('end')
    setDraggedTask(false);
  };

  const dragEnterTask = (task) => {
    setDraggedEnterTask(task);
    moveTask({ ...draggedTask, type: draggedEnterTaskGroup }, draggedEnterTask);
  };

  return (
    <section className="taskboard">
      <h2 className="visually-hidden">Ваши задачи:</h2>
      {taskGroups.map((taskGroup) => (
        <TaskGroup
          {...taskGroup}
          tasks={tasks.filter((task) => task.type === taskGroup.type)}
          draggedTask={draggedTask}
          changeTask={changeTask}
          dragStartTask={dragStartTask}
          dragEnterTaskGroup={dragEnterTaskGroup}
          dragEnterTask={dragEnterTask}
          dragEndTask={dragEndTask}
          key={taskGroup.type}
        />
      ))}
    </section>
  );
};

export default TaskBoard;
