// Import necessary components, styles, and libraries
import Sidebar from '../../components/sidebar/Sidebar'; // Import the Sidebar component
import AddTask from '../../components/taskmanager/AddTask'; // Import the AddTask component
import TaskList from '../../components/taskmanager/TaskList'; // Import the TaskList component
import './taskmanager.scss'; // Styles for the TaskManager component

// Define the TaskManager functional component
const TaskManager = () => {
  return (
    <div>
      <div className="taskmanager">
        <div className="taskmanager__left">
          <Sidebar /> {/* Render the Sidebar component */}
        </div>
        <div className="taskmanager__right">
          <div className="taskmanager__addtask">
            <AddTask /> {/* Render the AddTask component */}
          </div>
          <div className="taskmanager__tasklist">
            <TaskList /> {/* Render the TaskList component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager; // Export the TaskManager component for use in other parts of the application
