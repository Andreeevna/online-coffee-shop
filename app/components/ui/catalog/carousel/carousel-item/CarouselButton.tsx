import { useActions } from '@/hooks/useActions'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const CarouselButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart } = useActions()

	return (
		<button
			onClick={() =>
				addToCart({
					product,
					quantity: 1,
				})
			}
			className='tracking-widest bg-white rounded-xl px-3 py-1 text-xs mt-14 font-normal uppercase'
		>
			Add to backet
		</button>
	)
}

export default CarouselButton
