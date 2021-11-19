import React from 'react'
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, Text1, Mess } from './ReserveElement'
import { useState } from 'react'


const Reserve = () => {

    const [successMess, setSuccessMess] = useState()

    const onSubmit = (e) => {
        setSuccessMess("Thank you for choosing us, your reservation is ready");
        e.target.reset();
        e.preventDefault()
    }
    return ( 
        <> 
         <Container >
             <FormWrap>
                 <FormContent>
                     <Form onSubmit={onSubmit}>
                         <FormH1>Reserve your table</FormH1>
                         <Mess>{successMess}</Mess>
                         <FormLabel>Your name</FormLabel>
                         <FormInput type="text" required/>
                         <FormLabel>Number of guests</FormLabel>
                         <FormInput placeholder="maximum 15 people" type="number" min="1" max="15" required/>
                         <FormLabel>Date</FormLabel>
                         <FormInput type="datetime-local" required/>
                         <FormLabel>Email</FormLabel>
                         <FormInput type="email" required/>
                         <FormButton type="submit">Confirm</FormButton>
                         <Text> You will receive your order confirmation via email</Text>
                         <Text1> (for groups of more than 15 people, please contact us directly for reservation)</Text1>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container> 
        </>
    )
}

export default Reserve
