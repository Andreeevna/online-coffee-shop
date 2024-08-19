import { EnumSorting, ISortingItem } from './sorting.indetface'

export const sortingData: ISortingItem[] = [
	{
		label: 'Newest',
		value: EnumSorting.NEWEST,
	},
	{
		label: 'Oldest',
		value: EnumSorting.OLDEST,
	},
	{
		label: 'Price: low to hight',
		value: EnumSorting.LOW_TO_HIGH,
	},
	{
		label: 'Price: hight to low',
		value: EnumSorting.HIGH_TO_LOW,
	},
]
