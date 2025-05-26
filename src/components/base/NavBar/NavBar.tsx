import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav>
			<NavLink to='/'>Main</NavLink>
			<NavLink to='/gantt'>Gantt</NavLink>
		</nav>
	);
};
