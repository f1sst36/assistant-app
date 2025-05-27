import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const navigationItems: { label: string; url: string }[] = [
	{
		label: 'Main',
		url: '/',
	},
	{
		label: 'Gantt',
		url: '/gantt',
	},
];

export const NavBar = () => {
	return (
		<nav>
			{navigationItems.map((item) => {
				return (
					<NavLink to={item.url}>
						<Button type='link' block>
							{item.label}
						</Button>
					</NavLink>
				);
			})}
		</nav>
	);
};
