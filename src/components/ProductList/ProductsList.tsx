import Box from '@mui/material/Box'
import { ProductCard } from './ProductCard/ProductCard'
import { useEffect } from 'react'
import { BasicPagination } from '../Pagination/BasicPagination'
import { useAppSelector, useAppDispatch } from '../../state/reducers/store'
import { getProductsTC } from '../../state/reducers/products-reducer'

export const ProductsList = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.products.data)

    const totalProductsCount = useAppSelector((state) => state.products.total)
    const pageSize = useAppSelector((state) => state.products.productsPerPage)
    const currentPage = useAppSelector((state) => state.products.currentPage)

    useEffect(() => {
        dispatch(getProductsTC())
    }, [dispatch])

    return (
        <>
            <BasicPagination
                totalProductsCount={totalProductsCount}
                pageSize={pageSize}
                currentPage={currentPage}
                getNewProducts={() => dispatch(getProductsTC())}
            />
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
                {products.map((product) => {
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
        </>
    )
}
