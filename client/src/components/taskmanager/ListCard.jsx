// Import necessary libraries and styles
import './listCard.scss'; // Styles for the ListCard component
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi'; // Import icons from 'react-icons/bi'
import { arrowClick, deleteItem } from '../../redux/taskSlice'; // Import Redux actions 'arrowClick' and 'deleteItem' from 'taskSlice'
import { useDispatch } from 'react-redux'; // Import Redux useDispatch hook for dispatching actions

// Define the ListCard functional component that accepts 'items' as props
const ListCard = (items) => {
  const { item } = items; // Destructure 'item' from the 'items' props
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  // Define a function to handle arrow button clicks
  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string)); // Dispatch the 'arrowClick' action with the 'item' and direction ('string')
  };

  // Define a function to handle item deletion
  const handleDelete = () => {
    dispatch(deleteItem(item._id)); // Dispatch the 'deleteItem' action with the item's ID
  };

  return (
    <div>
      <ul className={`${item.status === 'done' ? 'completed menu' : 'menu'}`}>
        <li>
          <p>{item._id}</p> {/* Display the item's ID */}
        </li>
        <li>
          <p>{item.task}</p> {/* Display the item's task */}
        </li>
        <li>
          <p>{item.status}</p> {/* Display the item's status */}
        </li>
        <li>
          <button
            disabled={item.status === 'backlog'} // Disable the button if the item's status is 'backlog'
            onClick={() => ArrowClick('left')} // Handle the left arrow button click
          >
            <BiChevronLeft /> {/* Display the left arrow icon */}
          </button>
          <button
            disabled={item.status === 'done'} // Disable the button if the item's status is 'done'
            onClick={() => ArrowClick('right')} // Handle the right arrow button click
          >
            <BiChevronRight /> {/* Display the right arrow icon */}
          </button>
          <button onClick={handleDelete}>
            <BiTrash /> {/* Display the trash icon */}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard; // Export the ListCard component for use in other parts of the application
