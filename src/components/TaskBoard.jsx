import { taskCategories } from '../data/data';
import { PlusIcon } from './icons';
import TaskCategory from './TaskCategory';

const TaskBoard = () => {
	return (
		<div className="mx-auto max-w-7xl p-6">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-bold">Projectify</h2>
				<div className="flex space-x-2">
					<button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
						<PlusIcon />
						Add
					</button>
				</div>
			</div>

			<div className="-mx-2 mb-6 flex flex-wrap">
				{taskCategories.map((category) => (
					<TaskCategory key={category} />
				))}
			</div>
		</div>
	);
};

export default TaskBoard;