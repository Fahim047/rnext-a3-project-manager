import { createContext, useContext, useReducer, useState } from 'react';
import { tasksData } from '../data/data';
import { taskReducer } from '../reducers/taskReducer';

const TasksContext = createContext();
const QueryContext = createContext();
const TasksProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, tasksData);
	const [query, setQuery] = useState('');

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			<QueryContext.Provider value={{ query, setQuery }}>
				{children}
			</QueryContext.Provider>
		</TasksContext.Provider>
	);
};
export default TasksProvider;

export const useTasks = () => {
	return useContext(TasksContext);
};
export const useQuery = () => {
	return useContext(QueryContext);
};
