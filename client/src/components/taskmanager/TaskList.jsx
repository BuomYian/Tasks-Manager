// Import necessary libraries and styles
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks for state management
import { useEffect } from 'react'; // Import React useEffect hook for side effects
import { getAlltasks } from '../../redux/taskSlice'; // Import Redux action 'getAlltasks' from 'taskSlice'
import ListCard from './ListCard'; // Import the ListCard component
import './tasklist.scss'; // Styles for the TaskList component

// Define the TaskList functional component
const TaskList = () => {
  // Use the useSelector hook to access the 'auth' and 'task' states from Redux store
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.task);

  // Destructure relevant data from the 'auth' and 'task' states
  const { currentUser } = auth;
  const { AllTasks } = tasks;

  const dispatch = useDispatch(); // Initialize the useDispatch hook

  // Use the useEffect hook to fetch all tasks when the component mounts or when currentUser changes
  useEffect(() => {
    dispatch(getAlltasks(currentUser.token, currentUser.id)); // Dispatch the 'getAlltasks' action
  }, [dispatch, currentUser.token, currentUser.id]); // Dependencies for the useEffect

  return (
    <div>
      <ul className="list-header">
        {/* Render column headers */}
        <li>
          <h5>Task Id</h5>
        </li>
        <li>
          <h5>Task Name</h5>
        </li>
        <li>
          <h5>Task Status</h5>
        </li>
        <li>
          <h5>Action</h5>
        </li>
      </ul>
      {Object.values(AllTasks).map((item) => {
        // Map through the 'AllTasks' object and render ListCard component for each task
        return <ListCard key={item._id} item={item} />; // Pass 'item' as a prop to ListCard
      })}
    </div>
  );
};

export default TaskList; // Export the TaskList component for use in other parts of the application
