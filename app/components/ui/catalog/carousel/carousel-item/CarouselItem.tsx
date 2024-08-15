'use client'
import { FC, useState } from 'react'

import { TypeSize } from '@/store/types'
import clsx from 'clsx'
import { ICarouselItem } from './cariusel.interface'
import CarouselButton from './CarouselButton'
import styles from './CarouselItem.module.css'
import CarouselVariations from './CarouselVariations'
import CarouselNav from './CarouseNav/CarouselNav'

const CarouselItem: FC<ICarouselItem> = ({
	product,
	isActive,
	selectedItem,
	nexHandler,
	previousHandler,
}) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	return (
		<div
			className={clsx(styles.item, {
				[styles.active]: isActive,
			})}
			onClick={selectedItem}
			aria-label='Select item'
			role='button'
		>
			<CarouselNav
				product={product}
				isActive={isActive}
				nexHandler={nexHandler}
				previousHandler={previousHandler}
			/>
			<div>
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
			</div>
		</div>
	)
}

export default CarouselItem
