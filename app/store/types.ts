import { ICartItem } from '@/types/cart-item.interface'

export interface IInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayLoad extends Omit<ICartItem, 'id'> {}
export interface IChangeQuantity extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}

export type TypeSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI'
export interface IChangeSize extends Pick<ICartItem, 'id'> {
	size: TypeSize
}
