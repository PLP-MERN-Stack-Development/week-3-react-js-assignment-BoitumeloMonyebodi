// =================== pages/TaskManager.jsx ===================
import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/button.jsx';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input.trim(), completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'All' ? true : filter === 'Active' ? !task.completed : task.completed
  );

  return (
    <div className="space-y-4 w-full max-w-xl">
      <Card title="Task Manager">
        <div>
          <div className="flex space-x-2 mb-4"></div>
          <input
            className="border rounded px-3 py-2 w-full"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <Button onClick={addTask}>Add</Button>
          <div className="flex space-x-2 mb-4">
            {['All', 'Active', 'Completed'].map(status => (
              <Button
                key={status}
                variant={filter === status ? 'primary' : 'secondary'}
                onClick={() => setFilter(status)}
              >
                {status}
              </Button>
            ))}
          </div>
          <ul className="space-y-2">
            {filteredTasks.map(task => (
              <li key={task.id} className="flex justify-between items-center border-b pb-2">
                <span
                  className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </span>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default TaskManager;