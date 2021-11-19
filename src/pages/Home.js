import React from 'react'
import Open from '../components/Opening'
import Products from '../components/Products';
import { productData, productData2 } from '../components/Products/data';
import Book from '../components/Book';



const Home = () => {
    return (
        <div>
            <Open/>
            <Products heading="Our famous recipes" data={productData} des={"/menu"}/>
            <Book/>
            <Products heading="Our cocktails" data={productData2} des={"/beverages"}/>
        </div>
    )
}

export default Home
