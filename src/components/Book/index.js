import React from 'react'
import {BookContainer, Button} from './BookElement'
import { animateScroll as scroll} from 'react-scroll'

const Book = () => {
 
    return (
        <BookContainer>
            <h1>Skip the line</h1>
            <p>We are happy to serve the best dishes to all of our diners. Reserve your table and ensure a place at the best fine dining restaurant in town.</p>
            <Button to="/reserve">
                    Reserve your table
            </Button>
        </BookContainer>
    )
}
 
export default Book
