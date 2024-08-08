'use client'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Carousel from './carousel/Carousel'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div>
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
