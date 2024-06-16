import React, { useState, useEffect } from 'react';
import api from '../api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} fetchTasks={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
