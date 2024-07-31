import { ICartItem } from '@/types/cart-item.interface'

export interface IInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayLoad extends Omit<ICartItem, 'id'> {}
