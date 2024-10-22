import Header from './Header';
import TaskBoard from './TaskBoard';

const Main = () => {
	return (
		<main className="flex-1 overflow-y-auto overflow-x-hidden">
			{/* <!-- Top Bar --> */}
			<Header />
			{/* <!-- Project Content --> */}
			<TaskBoard />
		</main>
	);
};

export default Main;
