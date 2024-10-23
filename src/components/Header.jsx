import { BellIcon, HamburgerIcon, LetterIcon } from './icons';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<header className="flex items-center justify-between bg-gray-800 p-4">
			<button className="lg:hidden">
				<HamburgerIcon />
			</button>
			<SearchBar />
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
	);
};

export default Header;
