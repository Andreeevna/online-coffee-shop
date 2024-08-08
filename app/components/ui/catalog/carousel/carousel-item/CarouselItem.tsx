'use client'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'

import clsx from 'clsx'
import styles from './CarouselItem.module.css'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = false
	return (
		<div
			className={clsx(styles.item, {
				[styles.active]: isActive,
			})}
		>
			<Image
				className={styles.image}
				alt={product.name}
				src={product.images[0]}
				width={200}
				height={200}
			/>
			<div className={styles.heading}>{product.name}</div>
			<div className={styles.description}>{product.description}</div>
		</div>
	)
}

export default CarouselItem
