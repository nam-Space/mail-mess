
import './App.css';
import FormRegister from './components/Form';
import Mail from './components/Mail';
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/mail-mess' />}/>
			<Route path='/mail-mess' element={<FormRegister />}/>
			<Route path='/mail' element={<Mail />}/>
		</Routes>
	);
}

export default App;
