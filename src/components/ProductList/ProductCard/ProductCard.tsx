import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

type ProductCardType = {
    name: string
    price: string
    description: string
    image: string
}

export const ProductCard: React.FC<ProductCardType> = ({ name, price, description, image }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                height: 370,
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'space-around',
            }}
        >
            <CardActions>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <CardMedia component="img" height="100" image={image} alt="product" />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="h6" component="p">
                        ${price}
                    </Typography>
                </CardContent>
            </CardActions>
            <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />}>
                Add to Cart
            </Button>
        </Card>
    )
}
