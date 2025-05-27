import type { PropsWithChildren } from 'react';
import { NavBar } from '../NavBar/NavBar.tsx';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import styles from './BaseLayout.module.scss';

export const BaseLayout = ({ children }: PropsWithChildren) => {
	return (
		<Layout className={styles.wrapper}>
			<Sider collapsible collapsed={false}>
				<NavBar />
			</Sider>
			<Layout>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
};
