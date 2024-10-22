import {
	BarsArrowDown,
	BellIcon,
	HamburgerIcon,
	LetterIcon,
	PlusIcon,
} from './icons';
import Task from './Task';

const Main = () => {
	return (
		<main className="flex-1 overflow-y-auto overflow-x-hidden">
			{/* <!-- Top Bar --> */}
			<header className="flex items-center justify-between bg-gray-800 p-4">
				<button className="lg:hidden">
					<HamburgerIcon />
				</button>
				<div className="mx-4 flex-1">
					<input
						type="text"
						placeholder="Search here"
						className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
					/>
				</div>
				<div className="flex items-center">
					<button className="relative mr-4">
						<BellIcon />
						<span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
					</button>
					<button className="relative mr-4">
						<LetterIcon />
						<span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
					</button>
				</div>
			</header>

			{/* <!-- Project Content --> */}
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
					{/* <!-- Todo --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-indigo-600 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">To-Do (45)</h3>
								<BarsArrowDown />
							</div>
							<div>
								<Task />
								<Task />
								<Task />
							</div>

							{/* <!-- Add more task cards here --> */}
						</div>
					</div>

					{/* <!-- On Progress --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-yellow-500 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">On Progress (45)</h3>
								<BarsArrowDown />
							</div>

							<Task />
							<Task />
							{/* <!-- Add more task cards here --> */}
						</div>
					</div>

					{/* <!-- Done --> */}
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

					{/* <!-- Revised --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-rose-500 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">Revise (1)</h3>
								<BarsArrowDown />
							</div>
							<Task />

							{/* <!-- Add more task cards here --> */}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
