import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import api from '../api';

const Home = () => {
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="container">
      <div className="header-container">
        <h1 className="header">Task Manager</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="form-container">
        <TaskForm fetchTasks={fetchTasks} />
      </div>
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default Home;
