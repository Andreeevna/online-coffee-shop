'use client'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Carousel from './carousel/Carousel'
import Sorting from './sorting/Sorting'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div>
			<Sorting />
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
