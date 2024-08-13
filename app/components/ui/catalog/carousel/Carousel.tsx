'use client'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import CarouselItem from './carousel-item/CarouselItem'

import styles from './Carousel.module.css'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(1)

	const nexHandler = () => {
		selectedItemIndex !== products.length - 1 &&
			setSelectedItemIndex(selectedItemIndex + 1)
	}

	const previousHandler = () => {
		selectedItemIndex > 0 && setSelectedItemIndex(selectedItemIndex - 1)
	}
	return (
		<section className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem
					product={product}
					key={product.id}
					isActive={index === selectedItemIndex}
					selectedItem={() => setSelectedItemIndex(index)}
				/>
			))}
		</section>
	)
}

export default Carousel
