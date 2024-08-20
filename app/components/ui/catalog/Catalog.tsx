'use client'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import Carousel from './carousel/Carousel'
import Sorting from './sorting/Sorting'
import { EnumSorting } from './sorting/sorting.indetface'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

	return (
		<div>
			<Sorting sortType={sortType} setSortType={setSortType} />
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
