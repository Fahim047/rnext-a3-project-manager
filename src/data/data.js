import {
	CalenderIcon,
	ContactIcon,
	HomeIcon,
	KanbanIcon,
	MessageIcon,
	ProjectIcon,
	SettingIcon,
} from '../components/icons';

export const navLinks = [
	{ label: 'Dashboard', icon: HomeIcon },
	{ label: 'Projects', icon: ProjectIcon },
	{ label: 'Contact', icon: ContactIcon },
	{ label: 'Kanban', icon: KanbanIcon },
	{ label: 'Calendar', icon: CalenderIcon },
	{ label: 'Messages', icon: MessageIcon },
	{ label: 'Settings', icon: SettingIcon },
];

export const taskCategories = ['To-Do', 'On Progress', 'Done', 'Revise'];
export const tasksData = [
	{
		id: 1,
		title: 'Research UI/UX trends',
		description: 'Gather inspiration for modern web design trends.',
		status: 'To-Do',
		date: '2024-10-20',
	},
	{
		id: 2,
		title: 'Create wireframes',
		description: 'Design wireframes for homepage and product page.',
		status: 'To-Do',
		date: '2024-10-21',
	},
	{
		id: 3,
		title: 'Build navigation component',
		description: 'Implement responsive navigation for the website.',
		status: 'On Progress',
		date: '2024-10-18',
	},
	{
		id: 4,
		title: 'Set up project environment',
		description: 'Initialize project repo and install dependencies.',
		status: 'Done',
		date: '2024-10-15',
	},
	{
		id: 5,
		title: 'Revise footer design',
		description: 'Update the footer layout based on feedback.',
		status: 'Revise',
		date: '2024-10-19',
	},
	{
		id: 6,
		title: 'Design landing page',
		description: 'Create mockups for the landing page design.',
		status: 'On Progress',
		date: '2024-10-17',
	},
	{
		id: 7,
		title: 'Finalize color palette',
		description: 'Choose and finalize the color scheme for the project.',
		status: 'To-Do',
		date: '2024-10-22',
	},
	{
		id: 8,
		title: 'Test mobile responsiveness',
		description: 'Ensure the layout works well on mobile devices.',
		status: 'Done',
		date: '2024-10-20',
	},
	{
		id: 9,
		title: 'Integrate contact form',
		description: 'Set up a functioning contact form with backend integration.',
		status: 'On Progress',
		date: '2024-10-21',
	},
	{
		id: 10,
		title: 'Fix footer bugs',
		description: 'Resolve any issues with footer responsiveness.',
		status: 'Revise',
		date: '2024-10-23',
	},
];
