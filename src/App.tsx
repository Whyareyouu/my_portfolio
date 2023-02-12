import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { About, Home, NotFoundPage, Projects, Resume } from './pages';

function App() {
	return (
		<div className='container'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' />
					<Route path='/resume' element={<Resume />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
