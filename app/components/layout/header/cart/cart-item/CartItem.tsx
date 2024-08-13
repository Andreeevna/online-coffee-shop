'use client'
import Image from 'next/image'
import { FC } from 'react'

import { ICartItem } from '@/types/cart-item.interface'
import { formatToCurrentcy } from '@/utils/format-to'
import styles from './CartItem.module.css'
import { CartActions } from './cart-actions/CartActions'

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
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>
					{formatToCurrentcy(item.product.price)}
				</div>
				<div className={styles.variation}>{item.size}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}
