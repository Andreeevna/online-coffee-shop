'use client'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'

import clsx from 'clsx'
import styles from './CarouselItem.module.css'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = product.id == 3
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
				height={100}
				style={{ objectFit: 'contain' }}
			/>
			<div className={styles.heading}>
				<div>{product.name}</div>
			</div>
			{!isActive && (
				<div className={styles.description}>{product.description}</div>
			)}
		</div>
	)
}

export default CarouselItem
