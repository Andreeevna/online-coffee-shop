'use client'
import { FC, ReactNode } from 'react'

import styles from './LayoutContainer.module.css'
import Header from './header/Header'

interface ILayoutContainerProps {
	children: ReactNode
	title: string
}

export const LayoutContainer: FC<ILayoutContainerProps> = ({
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
