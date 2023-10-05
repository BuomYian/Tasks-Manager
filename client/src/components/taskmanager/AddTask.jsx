// Import necessary libraries and styles
import { useState } from 'react'; // Import React useState hook for managing state
import './addtask.scss'; // Styles for the AddTask component
import { addTask } from '../../redux/taskSlice'; // Import Redux action 'addTask' from 'taskSlice'
import { useDispatch, useSelector } from 'react-redux'; // Import Redux useDispatch and useSelector hooks for state management

// Define the AddTask functional component
const AddTask = () => {
  const dispatch = useDispatch();
  // Use the useSelector hook to access the 'auth' state from Redux store
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth; // Destructure 'currentUser' from the 'auth' state
  // Initialize state using the useState hook to manage the 'task' input field
  const [state, setState] = useState({
    task: '',
  });

  // Define a function to handle input field changes
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // Update the state with the new input value
    });
  };

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    dispatch(addTask(state.task, currentUser.id)); // Dispatch the 'addTask' action with the task text and user ID
    setState({
      task: '', // Clear the task input field after submission
    });
  };

  return (
    <div>
      <div className="addtask">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add your task"
            onChange={handleChange} // Handle changes in the task input field
            value={state.task} // Bind the value to the 'task' state
          />
          <button className="button">Add Task</button> {/* Submit the form */}
        </form>
      </div>
    </div>
  );
};

export default AddTask; // Export the AddTask component for use in other parts of the application
