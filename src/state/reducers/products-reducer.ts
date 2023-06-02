const initialState: ProductsStateType = {
    status: '',
    code: 0,
    total: 0,
    currentPage: 1, //for pagination
    productsPerPage: 30, //for pagination
    data: [],
}

export const productsReducer = (
    state: ProductsStateType = initialState,
    action: ProductsActionTypes
): ProductsStateType => {
    switch (action.type) {
        case 'SET-PRODUCTS':
            return {
                ...state,
                data: action.products,
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

export const setProductsAC = (products: Array<ProductData>) => {
    return {
        type: 'SET-PRODUCTS',
        products,
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

export type ProductsActionTypes = ReturnType<typeof setProductsAC> | ReturnType<typeof setCurrentPageAC>

type ProductsStateType = {
    status: string
    code: number
    total: number
    currentPage: number
    productsPerPage: number
    data: ProductData[]
}
type ProductData = {
    id: number
    name: string
    description: string
    ean?: string
    upc?: string
    image: string
    images?: null[] | null
    net_price?: number
    taxes?: number
    price: string
    categories?: number[] | null
    tags?: string[] | null
}
