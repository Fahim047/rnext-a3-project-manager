import React, { useState } from 'react';
import { useQuery } from '../contexts/TasksContext';
import { getColor } from '../utils/getColor';
import { BarsArrowDown, BarsArrowUp, SadIcon } from './icons';
import Task from './Task';
const TaskCategory = ({ taskType, tasks, onTaskEdit }) => {
	const [bgColor, textColor] = getColor(taskType);
	const [isAscending, setIsAscending] = useState(false);
	const { query } = useQuery();
	const handleSort = (a, b) => {
		if (isAscending) {
			return new Date(a.date) - new Date(b.date); // oldest task first
		} else {
			return new Date(b.date) - new Date(a.date); // newest task first
		}
	};
	const handleFilter = (task) => task.title.toLowerCase().includes(query);
	const filteredTasks = [...tasks].sort(handleSort).filter(handleFilter);
	return (
		<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
			<div className={`rounded-lg ${bgColor} p-4`}>
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-lg font-semibold">
						{taskType} {`(${filteredTasks.length})`}
					</h3>
					<button onClick={() => setIsAscending((prev) => !prev)}>
						{isAscending ? <BarsArrowUp /> : <BarsArrowDown />}
					</button>
				</div>
				{filteredTasks.length === 0 ? (
					<div className="flex flex-col items-center justify-center">
						<SadIcon />
						<p className="text-black/80">No task found!</p>
					</div>
				) : (
					filteredTasks.map((task) => (
						<Task
							key={task.id}
							titleColor={textColor}
							task={task}
							onEdit={onTaskEdit}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default TaskCategory;
