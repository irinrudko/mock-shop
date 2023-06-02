import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ProductsActionTypes, productsReducer } from './products-reducer'

export const rootReducer = combineReducers({
    products: productsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppRootActionType>
export type AppRootActionType = ProductsActionTypes

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store
