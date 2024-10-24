import { toast } from 'react-toastify';
import TasksProvider from '../contexts/TasksContext';
import Header from './Header';
import ProjectBoard from './ProjectBoard';

const Main = () => {
	const showToast = () => toast('Hello world!');
	return (
		<main className="flex-1 overflow-y-auto overflow-x-hidden">
			<TasksProvider>
				<Header />
				<ProjectBoard />
			</TasksProvider>
		</main>
	);
};

export default Main;
