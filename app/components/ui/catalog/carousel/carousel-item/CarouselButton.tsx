'use client'

import { useActions } from '@/hooks/useActions'
import { TypeSize } from '@/store/types'
import { IProduct } from '@/types/product.interface'
import { Dispatch, FC, SetStateAction } from 'react'

interface ICarouselButton {
	product: IProduct
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

const CarouselButton: FC<ICarouselButton> = ({
	product,
	selectedSize,
	setSelectedSize,
}) => {
	const { addToCart } = useActions()

	return (
		<button
			onClick={() =>
				addToCart({
					product,
					quantity: 1,
					size: selectedSize,
				})
			}
			className='tracking-widest bg-white rounded-xl px-3 py-1 text-xs mt-6 font-normal uppercase text-dark-green'
		>
			Add to backet
		</button>
	)
}

export default CarouselButton
