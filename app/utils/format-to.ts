export const formatToCurrentcy = (price: number) =>
	new Intl.NumberFormat('en-Us', {
		style: 'currency',
		currency: 'USD',
	}).format(price)
