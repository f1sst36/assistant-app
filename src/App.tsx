import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CalendarPage } from './pages/CalendarPage.tsx';
import { GanttPage } from './pages/GanttPage.tsx';
import { Layout } from './components/base/Layout/Layout.tsx';

export const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<CalendarPage />} />
					<Route path='gantt' element={<GanttPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
