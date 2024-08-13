'use client'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/types/cart-item.interface'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

export const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart, changeQuantity } = useActions()

	const { cart, total } = useCart()
	const qnt = cart.find(cartitem => cartitem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<HStack maxWidth='300px'>
				<Button
					{...dec}
					boxSize={7}
					fontSize={12}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
				>
					{' '}
					<MinusIcon fontSize={10} />
				</Button>
				<Input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
					fontSize={12}
					boxSize={7}
					padding={1.5}
					textAlign='center'
					value={qnt || 1}
				/>
				<Button
					{...inc}
					boxSize={7}
					fontSize={12}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					<AddIcon fontSize={10} />
				</Button>
			</HStack>
			<Button
				variant='link'
				color='#F23C3D'
				marginTop='3'
				opacity={0.7}
				onClick={() => removeFromCart({ id: item.product.id })}
			>
				Remove
			</Button>
		</div>
	)
}
