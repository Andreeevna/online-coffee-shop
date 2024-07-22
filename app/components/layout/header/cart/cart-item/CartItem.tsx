import Image from 'next/image'
import { FC } from 'react'

import { ICartItem } from '@/types/cart-item.interface'
import styles from './CartItem.module.css'

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={100}
				height={100}
			/>
			<div>
				<div className={styles.names}>{item.product.name}</div>
				<div className={styles.price}>
					{new Intl.NumberFormat(undefined, {
						style: 'currency',
						currency: 'USD',
					}).format(item.product.price)}
				</div>
			</div>
		</div>
	)
}
