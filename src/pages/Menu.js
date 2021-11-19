import React from 'react'
import Products from '../components/Products'
import { productData } from '../components/Products/data'
import { MenuContainer, MenuContent, MenuItems, MenuH1 } from './MenuElement'


const Menu = () => {
    return (
        <MenuContainer>
            <Products heading="Our famous recipes" data={productData} des={"/menu"}/>
        </MenuContainer>
    )
}

export default Menu
