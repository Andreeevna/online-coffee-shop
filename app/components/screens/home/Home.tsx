import { LayoutContainer } from '@/layout/LayoutContainer'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<LayoutContainer title='Home'>
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7xl font-bold text-red'> Shop</h1>
			</div>
		</LayoutContainer>
	)
}

export default Home
