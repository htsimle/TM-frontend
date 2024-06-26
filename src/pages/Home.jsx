import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const [isUpdated, setIsUpdated] = useState(false);

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
        <TaskForm setIsUpdated={setIsUpdated} />
      </div>
      <div className="task-list-container">
        <TaskList key={isUpdated.toString()} />
      </div>
    </div>
  );
};

export default Home;
