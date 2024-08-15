import { carouselSlice } from '@/store/carousel/carouselSlice'
import { cartSlice } from '@/store/cart/slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const rootAction = {
	...cartSlice.actions,
	...carouselSlice.actions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
