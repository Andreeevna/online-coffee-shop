import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

export const CartActions: FC = () => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			max: 5,
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	return (
		<div>
			<HStack>
				<Button {...dec}>
					{' '}
					<MinusIcon />
				</Button>
				<Input {...input} focusBorderColor='green.400' />
				<Button {...inc}>
					<AddIcon />
				</Button>
			</HStack>
		</div>
	)
}
