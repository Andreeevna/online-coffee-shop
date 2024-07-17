import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

import styles from './Menu.module.css'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image src='/images/Logo.png' alt='Logo' width='150' height='80' />
			</Link>
			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Menu
