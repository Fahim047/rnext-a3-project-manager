import Header from './Header';
import ProjectBoard from './ProjectBoard';

const Main = () => {
	return (
		<main className="flex-1 overflow-y-auto overflow-x-hidden">
			{/* <!-- Top Bar --> */}
			<Header />
			{/* <!-- Project Content --> */}
			<ProjectBoard />
		</main>
	);
};

export default Main;
