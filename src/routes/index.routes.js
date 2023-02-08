import { Router } from 'express';
import {
  createTask,
  renderTaskEdit,
  renderTask,
  updateTask,
  deleteTask,
  toggleDone,
} from '../controllers/task.controller';
const router = Router();

router.get('/', renderTask);

router.post('/tasks/add', createTask);

router.get('/edit/:id', renderTaskEdit);

router.post('/edit/:id', updateTask);

router.get('/delete/:id', deleteTask);

router.get('/toggleDone/:id', toggleDone);
export default router;
