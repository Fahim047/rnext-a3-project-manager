import React from 'react';
import { getColor } from '../utils/getColor';
import { BarsArrowDown } from './icons';
import Task from './Task';

const TaskCategory = ({ taskType }) => {
	const [bgColor, textColor] = getColor(taskType);

	return (
		<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
			<div className={`rounded-lg ${bgColor} p-4`}>
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-lg font-semibold">{taskType} (1)</h3>
					<BarsArrowDown />
				</div>

				<div>
					<Task
						titleColor={textColor}
						title="Develop API"
						description="Prepare proctor for client meeting"
						createdAt="February 20, 2024"
					/>
				</div>

				{/* <!-- Add more task cards here --> */}
			</div>
		</div>
	);
};

export default TaskCategory;
