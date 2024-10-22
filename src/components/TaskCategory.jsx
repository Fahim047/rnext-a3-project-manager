import React, { useState } from 'react';
import { getColor } from '../utils/getColor';
import { BarsArrowDown, BarsArrowUp } from './icons';
import Task from './Task';

const TaskCategory = ({ taskType, tasks }) => {
	const [bgColor, textColor] = getColor(taskType);
	const [isAscending, setIsAscending] = useState(false);
	const sortedTasks = [...tasks].sort((a, b) => {
		if (isAscending) {
			return new Date(a.creationDate) - new Date(b.creationDate); // oldest task first
		} else {
			return new Date(b.creationDate) - new Date(a.creationDate); // newest task first
		}
	});
	return (
		<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
			<div className={`rounded-lg ${bgColor} p-4`}>
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-lg font-semibold">{taskType} (1)</h3>
					<button onClick={() => setIsAscending((prev) => !prev)}>
						{isAscending ? <BarsArrowUp /> : <BarsArrowDown />}
					</button>
				</div>

				<div>
					{sortedTasks.map((task) => (
						<Task
							titleColor={textColor}
							title={task.title}
							description={task.description}
							createdAt={task.creationDate}
						/>
					))}
				</div>

				{/* <!-- Add more task cards here --> */}
			</div>
		</div>
	);
};

export default TaskCategory;
