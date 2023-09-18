import User from '../../database/model/user.model.js';
import Task from '../../database/model/task.model.js';

const addTask = async (req, res) => {
  const { task, id } = req.body;

  try {
    if (!task) {
      return res.status(400).send('please enter the task');
    }
    if (task.lenght < 10) {
      return res.status(400).send('Add minimum of 10 characters');
    }
    const taskDetail = await new Task({
      task,
      createdBy: id,
    });
    await taskDetail.save();
    return res.status(200).send(taskDetail);
  } catch (error) {
    return res.status(400).send('task addion failed');
  }
};

export default { addTask };
