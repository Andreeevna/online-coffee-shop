import { products } from '@/data/product.data'
import { LayoutContainer } from '@/layout/LayoutContainer'
import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<LayoutContainer title='Home'>
			<Heading className='mb-14 text-right'>
				The happiest hour of the year
			</Heading>
			<Catalog products={products} />
		</LayoutContainer>
	)
}

export default Home
