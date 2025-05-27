import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CalendarPage } from './pages/CalendarPage.tsx';
import { GanttPage } from './pages/GanttPage.tsx';
import { BaseLayout } from './components/base/BaseLayout/BaseLayout.tsx';

export const App = () => {
	return (
		<BrowserRouter>
			<BaseLayout>
				<Routes>
					<Route index element={<CalendarPage />} />
					<Route path='gantt' element={<GanttPage />} />
				</Routes>
			</BaseLayout>
		</BrowserRouter>
	);
};
