import { useTasks } from '../contexts/TasksContext';
import { PenIcon, TrashIcon } from './icons';

const Task = ({ task, titleColor }) => {
	const { id, title, description, creationDate } = task;
	const { tasks, dispatch } = useTasks();
	return (
		<div className="mb-4 rounded-lg bg-gray-800 p-4">
			<div className="flex justify-between">
				<h4 className={`mb-2 flex-1 font-semibold ${titleColor}`}>{title}</h4>
				<div className="flex gap-2">
					<button
						onClick={() =>
							dispatch({
								type: 'DELETE',
								payload: id,
							})
						}
					>
						<TrashIcon />
					</button>
					<button>
						<PenIcon />
					</button>
				</div>
			</div>
			<p className="mb-2 text-sm text-zinc-200">{description}</p>
			<p className="mt-6 text-xs text-zinc-400">{creationDate}</p>
		</div>
	);
};

export default Task;
