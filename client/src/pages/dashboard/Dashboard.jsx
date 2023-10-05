// Import necessary libraries and styles
import Sidebar from '../../components/sidebar/Sidebar'; // Import the Sidebar component
import { Link } from 'react-router-dom'; // Import Link component for routing
import './dashboard.scss'; // Styles for the Dashboard component
import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks for state management
import { useEffect } from 'react'; // Import React useEffect hook for side effects
import { getAlltasks } from '../../redux/taskSlice'; // Import Redux action 'getAlltasks' from 'taskSlice'

// Define the Dashboard functional component
const Dashboard = () => {
  // Use the useSelector hook to access the 'task' and 'auth' states from Redux store
  const tasklist = useSelector((state) => state.task);
  const { AllTasks } = tasklist;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  // Initialize arrays to store pending and completed tasks
  let pendingTask = [];
  let completedTask = [];

  // Loop through all tasks and categorize them as pending or completed
  for (let i = 0; i < AllTasks.length; i++) {
    if (AllTasks[i].status === 'todo') {
      pendingTask.push(AllTasks[i]);
    } else if (AllTasks[i].status === 'done') {
      completedTask.push(AllTasks[i]);
    }
  }

  const dispatch = useDispatch(); // Initialize the useDispatch hook

  // Use the useEffect hook to fetch all tasks when the component mounts or when currentUser changes
  useEffect(() => {
    dispatch(getAlltasks(currentUser.token, currentUser.id)); // Dispatch the 'getAlltasks' action
  }, [dispatch, currentUser.token, currentUser.id]); // Dependencies for the useEffect

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <Sidebar /> {/* Render the Sidebar component */}
        </div>
        <div className="dashboard__right">
          <div className="dashboard__rightContent">
            <h2>Task Status Dashboard</h2>
            <div className="taskcount">
              <div className="todo box">Todo - {pendingTask.length}</div>{' '}
              {/* Display the count of pending tasks */}
              <div className="done box">
                Completed - {completedTask.length}
              </div>{' '}
              {/* Display the count of completed tasks */}
            </div>
            <div className="createButton">
              <Link to="/taskmanager" className="button">
                Create Task
              </Link>{' '}
              {/* Link to the 'Create Task' page */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Export the Dashboard component for use in other parts of the application
