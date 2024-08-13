'use client'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC, useState } from 'react'

import { TypeSize } from '@/store/types'
import clsx from 'clsx'
import CarouselButton from './CarouselButton'
import styles from './CarouselItem.module.css'
import CarouselVariations from './CarouselVariations'

interface ICarouselItem {
	product: IProduct
	isActive: boolean
	selectedItem: () => void
}

const CarouselItem: FC<ICarouselItem> = ({
	product,
	isActive,
	selectedItem,
}) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')
	// const isActive = product.id == 3

	return (
		<button
			className={clsx(styles.item, {
				[styles.active]: isActive,
			})}
			onClick={selectedItem}
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
			{isActive ? (
				<>
					<CarouselVariations
						productId={product.id}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
					<div className='text-center'>
						<CarouselButton
							product={product}
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
					</div>
				</>
			) : (
				<div className={styles.description}>{product.description}</div>
			)}
		</button>
	)
}

export default CarouselItem
