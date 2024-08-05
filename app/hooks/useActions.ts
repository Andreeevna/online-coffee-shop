import { cartSlice } from '@/store/slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const rootAction = {
	...cartSlice.actions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(rootAction, dispatch)
}
