import { IProduct } from '@/types/product.interface'

export interface ICarouselItem {
	product: IProduct
	isActive: boolean
	selectedItem: () => void
	nexHandler: () => void
	previousHandler: () => void
}

export interface ICarouselNav extends Omit<ICarouselItem, 'selectedItem'> {}
