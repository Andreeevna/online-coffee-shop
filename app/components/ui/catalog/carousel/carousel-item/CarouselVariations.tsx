import { Dispatch, FC, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/types'
import clsx from 'clsx'
import styles from './CarouselItem.module.css'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ICarouselVariations {
	productId: number
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

const CarouselVariations: FC<ICarouselVariations> = ({
	productId,
	selectedSize,
	setSelectedSize,
}) => {
	return (
		<div className={styles.vatiations}>
			{SIZES.map(size => (
				<button
					key={size}
					className={clsx(styles.vatiations_button, {
						[styles.active_button]: selectedSize === size,
					})}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}

export default CarouselVariations
