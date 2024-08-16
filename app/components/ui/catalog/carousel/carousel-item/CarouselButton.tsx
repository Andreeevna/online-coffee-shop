'use client'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { TypeSize } from '@/store/cart/types'
import { ICartItem } from '@/types/cart-item.interface'
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
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()
	console.log(selectedSize)

	const currentEl = cart.find(
		(item: ICartItem) =>
			item.product.id === product.id && item.size === selectedSize
	)

	return (
		<button
			onClick={() =>
				currentEl
					? removeFromCart({ id: currentEl.id })
					: addToCart({
							product,
							quantity: 1,
							size: selectedSize,
					  })
			}
			className='tracking-widest bg-white rounded-xl px-3 py-1 text-xs mt-6 font-normal uppercase text-dark-green'
		>
			{currentEl ? 'Remove from basket' : 'Add to basket'}
		</button>
	)
}

export default CarouselButton
