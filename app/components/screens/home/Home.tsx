import { products } from '@/data/product.data'
import { LayoutContainer } from '@/layout/LayoutContainer'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<LayoutContainer title='Home'>
			<Catalog products={products} />
		</LayoutContainer>
	)
}

export default Home
