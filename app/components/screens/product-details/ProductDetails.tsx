'use client'

import { LayoutContainer } from '@/layout/LayoutContainer'
import { store } from '@/store/store'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { IProductDetails } from '../../../../pages/product/[slug]'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Provider store={store}>
			<LayoutContainer title={product.name}>
				<Heading className='mb-14 text-center'>{product.name}</Heading>
			</LayoutContainer>
		</Provider>
	)
}

export default ProductDetails
