import { AxiosResponse } from 'axios'
import { instance } from './instanse'

export const productsAPI = {
    getProducts() {
        return instance.get<AxiosResponse<ProductsResponseType>>('products?_quantity=6').then(({ data }) => data)
    },
}

export type ProductData = {
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

export type ProductsResponseType = {
    status: string
    code: number
    total: number
    data: ProductData[]
}
