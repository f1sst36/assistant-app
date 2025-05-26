import type { PropsWithChildren } from 'react';
import { NavBar } from '../NavBar/NavBar.tsx';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<main className={styles.main}>
			<aside>
				<NavBar />
			</aside>
			{children}
		</main>
	);
};
