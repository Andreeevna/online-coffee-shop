'use client'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { formatToCurrentcy } from '@/utils/format-to'
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
	const cart = useTypedSelector(state => state.cart.items)

	const total = cart.reduce((acc, item) => (acc += item.product.price), 0)

	return (
		<div>
			<div className={styles['wrapper-cart']}>
				<button
					className={styles.heading}
					onClick={() => setIsOpen(!isOpen)}
					ref={btnRef}
				>
					<p className={styles.badge}>{cart.length}</p>
					<p className={styles.text}>My basket</p>
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
					<DrawerHeader>My basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.map(item => {
								return <CartItem item={item} key={item.id} />
							})}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						alignItems='center'
						borderTopColor='#F7F4F0'
						borderTopWidth={1}
					>
						<div className={styles['cart-footer']}>
							<div>Total:</div>
							<div>{formatToCurrentcy(total)}</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
