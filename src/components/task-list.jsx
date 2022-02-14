import TaskItem from './task-item';

const TaskList = ({ tasks, changeTask }) => {
  return (
    <div className="taskboard__list">
      {tasks.map((task) => (
        <TaskItem task={task} changeTask={changeTask} key={task.id}/>
      ))}
    </div>
  );
};

export default TaskList;
