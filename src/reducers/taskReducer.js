export const taskReducer = (tasks, action) => {
	switch (action.type) {
		case 'DELETE':
			return tasks.filter((task) => task.id !== action.payload);
	}
};
