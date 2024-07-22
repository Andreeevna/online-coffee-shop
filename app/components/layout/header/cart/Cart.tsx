'use client'
import { cart } from '@/data/cart.data'
import { FC, useState } from 'react'
import styles from './Cart.module.css'
import { CartItem } from './cart-item/CartItem'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>My basket</span>
			</button>
			{isOpen && (
				<div className={styles.cart}>
					{cart.map(item => {
						return <CartItem item={item} key={item.id} />
					})}
				</div>
			)}
		</div>
	)
}

export default Cart
