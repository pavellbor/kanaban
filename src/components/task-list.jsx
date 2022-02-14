import TaskItem from './task-item';

const TaskList = ({ tasks }) => {
  return (
    <div className="taskboard__list">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id}/>
      ))}
    </div>
  );
};

export default TaskList;
