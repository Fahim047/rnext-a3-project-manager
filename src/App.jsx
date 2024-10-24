import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<Main />
			<ToastContainer />
		</div>
	);
}

export default App;
