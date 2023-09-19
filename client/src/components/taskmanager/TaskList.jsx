import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAlltasks } from '../../redux/taskSlice';
import ListCard from './listCard';
import './tasklist.scss';

const TaskList = () => {
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.task);

  const { currentUser } = auth;
  const { AllTasks } = tasks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlltasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);
  return (
    <div>
      <ul className="list-header">
        <li>
          <h5>Id</h5>
        </li>
        <li>
          <h5>Issue Name</h5>
        </li>
        <li>
          <h5>Status</h5>
        </li>
        <li>
          <h5>Action</h5>
        </li>
      </ul>
      {Object.values(AllTasks).map((item) => {
        return <ListCard key={item._id} item={item} />;
      })}
    </div>
  );
};

export default TaskList;
