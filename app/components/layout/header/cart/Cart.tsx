import { FC } from 'react'
import styles from './Cart.module.css'

const Cart: FC = () => {
	return (
		<div className={styles['wrapper-cart']}>
			<div className={styles.heading}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>My basket</span>
			</div>
			<div className={styles.cart}></div>
		</div>
	)
}

export default Cart
