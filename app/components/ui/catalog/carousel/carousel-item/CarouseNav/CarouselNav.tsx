import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'
import { ICarouselNav } from '../cariusel.interface'

import { products } from '@/data/product.data'
import { useActions } from '@/hooks/useActions'
import styles from './CarouselNav.module.css'

const CarouselNav: FC<ICarouselNav> = ({
	onSelectSlide,
	product,
	isActive,
}) => {
	const { prevSlide, nextSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<button onClick={() => prevSlide()} className={styles.arrow_left}>
					<ChevronLeftIcon fontSize={30} />
				</button>
			)}
			<button onClick={onSelectSlide}>
				<Image
					className={styles.image}
					alt={product.name}
					src={product.images[0]}
					width={200}
					height={100}
					style={{ objectFit: 'contain' }}
					draggable={false}
				/>
			</button>

			{isActive && (
				<button
					onClick={() => nextSlide({ carouselLength: products.length })}
					className={styles.arrow_right}
				>
					<ChevronRightIcon fontSize={30} />
				</button>
			)}
		</div>
	)
}

export default CarouselNav
