import TasksProvider from '../contexts/TasksContext';
import Header from './Header';
import ProjectBoard from './ProjectBoard';

const Main = () => {
	return (
		<main className="flex-1 overflow-y-auto overflow-x-hidden">
			<TasksProvider>
				{/* <!-- Top Bar --> */}
				<Header />
				{/* <!-- Project Content --> */}
				<ProjectBoard />
			</TasksProvider>
		</main>
	);
};

export default Main;
