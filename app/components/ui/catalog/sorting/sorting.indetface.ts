export enum EnumSorting {
	LOW_TO_HIGH = 'LOW_TO_HIGH',
	HIGH_TO_LOW = 'HIGH_TO_LOW',
	NEWEST = 'NEWEST',
	OLDEST = 'OLDEST',
}

export interface ISortingItem {
	label: 'Price: hight to low' | 'Price: low to hight' | 'Newest' | 'Oldest'
	value: EnumSorting
}
