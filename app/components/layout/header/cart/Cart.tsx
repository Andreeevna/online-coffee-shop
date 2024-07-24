'use client'
import { cart } from '@/data/cart.data'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'
import styles from './Cart.module.css'
import { CartItem } from './cart-item/CartItem'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const btnRef = useRef<HTMLButtonElement>(null)

	//TODO add redux

	return (
		<>
			<div className={styles['wrapper-cart']}>
				<button
					className={styles.heading}
					onClick={() => setIsOpen(!isOpen)}
					ref={btnRef}
				>
					<span className={styles.badge}>1</span>
					<span className={styles.text}>My basket</span>
				</button>
			</div>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My cart</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.map(item => {
								return <CartItem item={item} key={item.id} />
							})}
						</div>{' '}
					</DrawerBody>

					<DrawerFooter justifyContent='space-between' alignItems='center'>
						<div className={styles['cart-footer']}>
							<span>Total:</span>
							<span>$100</span>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Cart
