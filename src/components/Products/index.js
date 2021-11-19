import React from 'react'
import {ProductContainer, Heading, Wrapper, Card, Img, Info, 
        Title, Desc, Price, ButtonWrapper, Button} from './ProductElement'
import { animateScroll as scroll} from 'react-scroll'
import styled from 'styled-components/macro'

const Products = ({data, heading, des}) => {


    return (
        <ProductContainer>
            <Heading>{heading}</Heading> 
            <Wrapper>
                {data.map((product, index) =>{ 
                    return(
                        <Card key={index}>
                            <Img src={product.img}
                                alt={product.alt} />
                            <Info>
                                <Title>{product.name}</Title>
                                <Desc>{product.desc}</Desc>
                                <Price>{product.price}</Price>
                                {/* <Button>{product.button}</Button> */}
                            </Info>
                        </Card>
                    )
                })}
            </Wrapper>
            <ButtonWrapper>
                <Button to={des}>
                    View more
                </Button>
            </ButtonWrapper>
        </ProductContainer>
    )
}

export default Products
