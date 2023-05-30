import axios from 'axios'
import Box from '@mui/material/Box'
import { ProductCard } from './ProductCard/ProductCard'
import { useEffect, useState } from 'react'

type ProductsList = {
    status: string
    code: number
    total: number
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

export const ProductsList = () => {
    const [productsList, setProductsList] = useState<ProductData[]>([])

    useEffect(() => {
        axios.get<ProductsList>('https://fakerapi.it/api/v1/products?_quantity=100').then((response) => {
            setProductsList(response.data.data)
            console.log(response.data.data)
        })
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 5,
                    width: 300,
                    height: 350,
                },
            }}
        >
            {productsList == null
                ? 'loading'
                : productsList.map((product) => {
                      return (
                          <div key={product.id}>
                              <ProductCard
                                  name={product.name}
                                  price={product.price}
                                  description={product.description}
                                  image={product.image}
                              />
                          </div>
                      )
                  })}
        </Box>
    )
}
