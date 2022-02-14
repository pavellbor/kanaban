import { useState } from 'react';
import { TaskGroupType } from '../const';
import { taskGroups } from '../settings';
import AddTask from './add-task';
import TaskBoard from './task-board';

const initialTasks = [
  { id: 1, body: 'Сделать домашку', type: TaskGroupType.BACKLOG },
  { id: 2, body: 'Завести кота', type: TaskGroupType.BACKLOG },
  { id: 3, body: 'Завести девушку', type: TaskGroupType.BACKLOG },
  { id: 4, body: 'Выпить смузи', type: TaskGroupType.PROCESSING },
  { id: 5, body: 'Перестать тупить', type: TaskGroupType.PROCESSING },
  { id: 6, body: 'Позвонить маме', type: TaskGroupType.DONE },
  { id: 7, body: 'Погладить брюки', type: TaskGroupType.DONE },
  { id: 8, body: 'Сходить погулять', type: TaskGroupType.BACKET },
  { id: 9, body: 'Прочитать Войну и Мир', type: TaskGroupType.BACKET },
];

const AppMain = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (body) => {
    const newTask = {
      id: Date.now(),
      body,
      type: TaskGroupType.BACKLOG,
    };

    setTasks([...tasks, newTask]);
  };

  const changeTask = (changedTask) => {
    const changedTaskIndex = tasks.findIndex((task) => task.id === changedTask.id);
    setTasks([...tasks.slice(0, changedTaskIndex), changedTask, ...tasks.slice(changedTaskIndex + 1)]);
  };

  return (
    <main className="board-app__main">
      <div className="board-app__inner">
        <AddTask addTask={addTask} />
        <TaskBoard
          taskGroups={taskGroups}
          tasks={tasks}
          changeTask={changeTask}
        />
      </div>
    </main>
  );
};

export default AppMain;
