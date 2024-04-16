import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './Components/Navbar/NavBar';
import Cart from './Components/Cart/Cart';

import { Provider } from 'react-redux';
import myStore from './redux/stores/store';

const App = () => {
	return (
		<>
			<Provider store={myStore}>
				<div className='bg-slate-300'>
					<NavBar />
				</div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</Provider>
		</>
	);
};

export default App;
