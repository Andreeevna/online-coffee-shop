import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'
import { ICarouselNav } from '../cariusel.interface'

import styles from './CarouselNav.module.css'

const CarouselNav: FC<ICarouselNav> = ({
	product,
	isActive,
	nexHandler,
	previousHandler,
}) => {
	return (
		<div className={styles.navigation}>
			{isActive && (
				<button onClick={previousHandler} className={styles.arrow_left}>
					<ChevronLeftIcon fontSize={30} />
				</button>
			)}
			<Image
				className={styles.image}
				alt={product.name}
				src={product.images[0]}
				width={200}
				height={100}
				style={{ objectFit: 'contain' }}
				draggable={false}
			/>
			{isActive && (
				<button onClick={nexHandler} className={styles.arrow_right}>
					<ChevronRightIcon fontSize={30} />
				</button>
			)}
		</div>
	)
}

export default CarouselNav
