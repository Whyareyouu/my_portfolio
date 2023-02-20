import { Suspense } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { About, Home, NotFoundPage, Projects, Resume } from './pages';
import { Contact } from './pages/Contact/Contact';

function App() {
	return (
		<div className='container'>
			<Suspense
				fallback={
					<Triangle
						height='160'
						width='160'
						color='#ff77e9'
						ariaLabel='triangle-loading'
						visible={true}
					/>
				}>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Layout>
			</Suspense>
		</div>
	);
}

export default App;
