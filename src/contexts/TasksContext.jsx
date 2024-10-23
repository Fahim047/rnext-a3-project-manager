import { createContext, useContext, useReducer } from 'react';
import { tasksData } from '../data/data';
import { taskReducer } from '../reducers/taskReducer';

const TasksContext = createContext();
const TasksProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, tasksData);

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
};
export default TasksProvider;

export const useTasks = () => {
	return useContext(TasksContext);
};
