import React, { useState } from 'react';
import api from '../api';

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task.id}`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/tasks/${task.id}`, { title, description });
      setIsEditing(false);
      fetchTasks();
    } catch (error) {
      console.error('Failed to update task', error);
    }
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div>
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
