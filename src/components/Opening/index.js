import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {OpenContainer, OpenContent, OpenItems, OpenH1,
        OpenP, OpenBtn} from './OpenElement'
import { useState } from 'react'

const Open = () => {
 
    return (
        <OpenContainer> 
            <OpenContent>
                <OpenItems>
                    <OpenH1>Fine dining in town</OpenH1>
                    <OpenP>3 Michelin star restaurant</OpenP>
                    <OpenBtn to="/reserve">Reserve table</OpenBtn>
                </OpenItems>
            </OpenContent>
        </OpenContainer>
    )
}

export default Open
