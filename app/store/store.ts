'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartSlice } from './slice'

const persistConfig = {
	key: 'coffee-shop',
	storage,
	whitelist: ['cart'],
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
