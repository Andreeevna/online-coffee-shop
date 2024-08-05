'use client'

import { useActions } from '@/hooks/useActions'
import { ICartItem } from '@/types/cart-item.interface'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

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

	const dispatch = useDispatch()

	const { removeFromCart } = useActions()

	return (
		<div className='mt-3'>
			<HStack maxWidth='300px'>
				<Button {...dec} boxSize={7} fontSize={12}>
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
				/>
				<Button {...inc} boxSize={7} fontSize={12}>
					<AddIcon fontSize={10} />
				</Button>
			</HStack>
			<Button
				variant='link'
				color='#F23C3D'
				marginTop='3'
				opacity={0.7}
				onClick={() => removeFromCart({ id: item.id })}
			>
				Remove
			</Button>
		</div>
	)
}
