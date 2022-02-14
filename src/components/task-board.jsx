import TaskGroup from './task-group';

const TaskBoard = ({ taskGroups, tasks, changeTask }) => {
  return (
    <section className="taskboard">
      <h2 className="visually-hidden">Ваши задачи:</h2>
      {taskGroups.map((taskGroup) => (
        <TaskGroup
          {...taskGroup}
          tasks={tasks.filter((task) => task.type === taskGroup.type)}
          changeTask={changeTask}
          key={taskGroup.type}
        />
      ))}
    </section>
  );
};

export default TaskBoard;
