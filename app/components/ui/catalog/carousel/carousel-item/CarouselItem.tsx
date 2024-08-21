'use client'
import { FC, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { TypeSize } from '@/store/cart/types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
		<motion.div
			className={clsx(styles.item, {
				[styles.active]: isActive,
			})}
			aria-label='Select item'
			role='button'
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.12 } : {}}
			transition={{ duration: 1, type: 'spring' }}
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
						<Link href={`/product/${product.slug}`}>More info</Link>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
