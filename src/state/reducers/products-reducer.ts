import { ProductData, ProductsResponseType, productsAPI } from '../../API/products-api'
import { AppThunk } from './store'

const initialState = {
    status: '',
    code: 0,
    total: 0,
    currentPage: 1,
    productsPerPage: 30,
    data: [
        {
            id: 1,
            name: '',
            description: '',
            image: '',
            price: '',
        },
    ] as ProductData[],
}

export type ProductsStateType = typeof initialState

export const productsReducer = (
    state: ProductsStateType = initialState,
    action: ProductsActionTypes
): ProductsStateType => {
    switch (action.type) {
        case 'GET-PRODUCTS':
            return {
                ...state,
                data: action.products.data,
            }

        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state
    }
}

// Action Creators
export const getProductsAC = (products: ProductsResponseType) => ({ type: 'GET-PRODUCTS', products } as const)

// export const setProductsAC = (products: Array<ProductData>) => {
//     return {
//         type: 'SET-PRODUCTS',
//         products,
//     } as const
// }
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

// Thunks
export const getProductsTC = (): AppThunk => (dispatch) => {
    productsAPI
        .getProducts()
        .then((res) => {
            //@ts-ignore
            dispatch(getProductsAC(res))
        })
        .catch((err: any) => {
            let error = err.response.data.error
            console.log('catch, error:', error)
        })
}

export type ProductsActionTypes = ReturnType<typeof getProductsAC> | ReturnType<typeof setCurrentPageAC>
