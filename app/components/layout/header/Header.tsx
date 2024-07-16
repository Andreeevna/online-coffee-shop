import { FC } from 'react'

import Cart from './cart/Cart'
import Menu from './menu/Menu'
import Search from './search/Search'

import styles from './Header.module.css'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</div>
	)
}

export default Header
