import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FC } from 'react'
import { sortingData } from './sorting.data'

const Sorting: FC = () => {
	return (
		<div className='mb-20'>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					Actions
				</MenuButton>
				<MenuList>
					{sortingData.map(sort => (
						<MenuItem key={sort.value}>{sort.label}</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	)
}

export default Sorting
