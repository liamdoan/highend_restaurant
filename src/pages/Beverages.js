import React from 'react'
import Products from '../components/Products'
import { productData2 } from '../components/Products/data'
import { BeveragesContainer, BeveragesContent, BeveragesItems, BeveragesH1 } from './BeveragesElement'


const Beverages = () => {
    return (
        <BeveragesContainer>
            <Products heading="Our cocktails" data={productData2} des={"/beverages"}/>
        </BeveragesContainer>
    )
}

export default Beverages
