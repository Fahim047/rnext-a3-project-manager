import React from 'react';
import { BarsArrowDown } from './icons';
import Task from './Task';

const TaskCategory = () => {
	return (
		<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
			<div className="rounded-lg bg-teal-500 p-4">
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-lg font-semibold">Done (1)</h3>
					<BarsArrowDown />
				</div>

				<div>
					<Task />
					<Task />
				</div>

				{/* <!-- Add more task cards here --> */}
			</div>
		</div>
	);
};

export default TaskCategory;
