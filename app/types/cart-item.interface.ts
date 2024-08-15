import { TypeSize } from '@/store/cart/types'
import { IProduct } from '@/types/product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	size: TypeSize
}
