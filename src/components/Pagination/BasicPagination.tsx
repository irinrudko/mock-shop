// import Pagination from '@mui/material/Pagination'
// import Stack from '@mui/material/Stack'

// export const BasicPagination = () => {
//     return (
//         <>
//             <Stack spacing={2}>
//                 <Pagination count={10} color="primary" size="large" />
//             </Stack>
//         </>
//     )
// }
type PaginationType = {
    totalProductsCount: number
    pageSize: number
    currentPage: number
    getNewProducts: (page: number) => void
}

export const BasicPagination = (props: PaginationType) => {
    const pages = []

    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    const mappedPages = pages.map((page) => {
        return <span onClick={() => props.getNewProducts(page)}>{page}</span>
    })

    return <div> {mappedPages}</div>
}
