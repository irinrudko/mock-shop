import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Header/Navbar/Navbar'
import { ProductsList } from './components/ProductList/ProductsList'

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <ProductsList />
        </>
    )
}

export default App
