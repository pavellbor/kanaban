import { useState } from 'react';
import { TaskGroupType } from '../const';
import { taskGroups } from '../settings';
import AddTask from './add-task';
import TaskBoard from './task-board';

const initials = [
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
  const [tasks, setTasks] = useState(initials);

  const addTask = (body) => {
    const copyTask = {
      id: Date.now(),
      body,
      type: TaskGroupType.BACKLOG,
    };

    setTasks([...tasks, copyTask]);
  };

  const changeTask = (changedTask) => {
    const changedTaskIndex = tasks.findIndex(
      (task) => task.id === changedTask.id
    );

    setTasks([
      ...tasks.slice(0, changedTaskIndex),
      changedTask,
      ...tasks.slice(changedTaskIndex + 1),
    ]);
  };

  const removeTasks = (removedTasks) => {
    setTasks([...tasks.filter((task) => !removedTasks.includes(task))]);
  };

  const moveTask = (changedTask, nextTask, type) => {
    if (!nextTask && !type) {
      return;
    }

    let updatedTasks = [...tasks];

    const changedTaskIndex = tasks.findIndex(
      (task) => task.id === changedTask.id
    );

    if (changedTaskIndex !== -1) {
      updatedTasks = [
        ...tasks.slice(0, changedTaskIndex),
        ...tasks.slice(changedTaskIndex + 1),
      ];
    }

    if (type) {
      setTasks([...updatedTasks, { ...changedTask, type }]);

      return;
    }

    const nextTaskIndex = tasks.findIndex((task) => task.id === nextTask.id);

    setTasks([
      ...updatedTasks.slice(0, nextTaskIndex),
      changedTask,
      ...updatedTasks.slice(nextTaskIndex),
    ]);
  };

  const replaceTask = (originalTask, copyTask) => {
    const originalTaskIndex = tasks.findIndex((task) => task.id === originalTask.id);

    const updatedTasks = [
      ...tasks.slice(0, originalTaskIndex),
      ...tasks.slice(originalTaskIndex + 1),
    ];

    const copyTaskIndex = updatedTasks.findIndex((task) => task.id === copyTask.id);

    setTasks([
      ...updatedTasks.slice(0, copyTaskIndex),
      {...originalTask, type: copyTask.type},
      ...updatedTasks.slice(copyTaskIndex + 1),
    ]);
  };

  return (
    <main className="board-app__main">
      <div className="board-app__inner">
        <AddTask addTask={addTask} />
        <TaskBoard
          taskGroups={taskGroups}
          tasks={tasks}
          changeTask={changeTask}
          moveTask={moveTask}
          removeTasks={removeTasks}
          replaceTask={replaceTask}
        />
      </div>
    </main>
  );
};

export default AppMain;
