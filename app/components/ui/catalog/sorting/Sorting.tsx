import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { sortingData } from './sorting.data'
import { EnumSorting } from './sorting.indetface'

interface ISorting {
	sortType: EnumSorting
	setSortType: Dispatch<SetStateAction<EnumSorting>>
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
	return (
		<div className='mb-20 text-right'>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					{sortingData.find(sort => sort.value === sortType)?.label}
				</MenuButton>
				<MenuList>
					{sortingData.map(sort => (
						<MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
							{sort.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	)
}

export default Sorting
