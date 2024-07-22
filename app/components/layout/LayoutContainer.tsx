import { FC, ReactNode } from 'react'

import styles from './LayoutContainer.module.css'
import Header from './header/Header'

interface LayoutContainerProps {
	children: ReactNode
	title: string
}

export const LayoutContainer: FC<LayoutContainerProps> = ({
	children,
	title,
}) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main> {children}</main>
		</div>
	)
}
