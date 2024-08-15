'use client'
import { FC, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { TypeSize } from '@/store/cart/types'
import clsx from 'clsx'
import { ICarouselItem } from './cariusel.interface'
import CarouselButton from './CarouselButton'
import styles from './CarouselItem.module.css'
import CarouselVariations from './CarouselVariations'
import CarouselNav from './CarouseNav/CarouselNav'
import { useCarousel } from './useCarousel'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex
	return (
		<div
			className={clsx(styles.item, {
				[styles.active]: isActive,
			})}
			aria-label='Select item'
			role='button'
		>
			<CarouselNav
				onSelectSlide={() => selectSlide(index)}
				product={product}
				isActive={isActive}
			/>
			<div>
				<div className={styles.heading} onClick={() => selectSlide(index)}>
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
			</div>
		</div>
	)
}

export default CarouselItem
