import { IProduct } from '@/types/product.interface'

export interface ICarouselItem {
	product: IProduct
	index: number
}

export interface ICarouselNav extends Omit<ICarouselItem, 'index'> {
	onSelectSlide: () => void
	isActive: boolean
}
