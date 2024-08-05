'use client'

import { cart } from '@/data/cart.data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAddToCartPayLoad, IInitialState } from './types'

const initialState: IInitialState = {
	items: cart,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayLoad>) => {
			const id = state.items.length
			state.items.push({ ...action.payload, id })
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(
				item => item.product.id !== action.payload.id
			)
		},
	},
})
