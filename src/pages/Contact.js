import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import ContactImg from "../images/pagecontact.jpg"


const ContactSection = styled.section`
padding: 4rem 2rem;
background: linear-gradient(to right, 
    rgba(0,0,0,0.8), 
    rgba(0,0,0,0.5)), url(${ContactImg});
height: 100vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 100%;

@media screen and (max-width: 540px) {
padding: 4rem 1rem;
}
`
const Heading = styled.div`
margin-top: 50px;
    h1{ 
        text-align: center;
        margin: 15px 0;
        color: #b6a89c;
        text-transform: uppercase;
    };
`

const Description = styled.p`
text-align: center;
margin: 10px 0 30px;
color: white;
font-size: 14px;
font-weight: 400;
`

const Notice = styled.p`
text-align: center;
font-size: 18px;
font-weight: 500;
color: greenyellow;
font-style: italic;
`


const Container = styled.div`
/* background-color: darkgray; */
padding: 2rem;

@media screen and (max-width: 375px) {
    padding: 2rem 0rem;
}
`

const Form = styled.form`
`

const FormRow = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 35px;

@media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
`

const InfoContent = styled.div`
`

const Label = styled.label`
color: white;
font-size: 14px;
font-style: italic;

::after {
    content: "*";
    color: red;
    position: absolute;
    padding-left: 5px;
    font-size: 20px;
}
`

const Label1 = styled.label`
color: white;
font-size: 14px;
font-style: italic;
`

const Input = styled.input`
width: 100%;
height: 35px;
box-sizing: border-box;
background: rgba(128,128,128,0.5);
resize: none;
border: 1px solid #c7c7c7;
border-radius: 5px;
padding: 20px 10px;
color: white;
outline: 0 !important;
margin-bottom: 20px;
margin-top: 7px;
/* padding-left: 0 !important; */
transition: 0.3s ease-in-out;   

&:focus {
    background: transparent;
    color:#daa459;
    border-bottom: 4px solid #daa459;
    transition: 0.3s ease-in-out;   
}
    
`
const FormControl = styled.div`
`

const FormControlMess = styled.div`
margin-bottom: 21px;
`

const InputMess = styled.textarea`
height: 224px;
width: 100%;
box-sizing: border-box;
background: rgba(128,128,128,0.5);
resize: none;
border: 1px solid #c7c7c7; 
border-radius: 5px;
color: white;
outline: 0;
box-shadow: none;
top: 0px;
margin-bottom: 1rem;
margin-top: 7px;
padding: 15px 10px;
transition: 0.3s ease-in-out;

&:focus {
border-bottom: 4px solid #daa459;
transition: 0.3s ease-in-out;
color:#daa459;
background: transparent;
}
`

const Button = styled.button`
background: #557a95;
white-space: nowrap;
outline: none;
border: none;
width: 100%;
cursor: pointer;
text-decoration: none;
transform: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: 16px 40px;
color: white;
font-size: 14px;
transition: 0.3s ease-in-out;

&:hover {
    transform: translateY(-2px);
    background: #b1a296;
    transition: 0.3s ease-in-out;
}
`

const Contact = () => {
    
    const [successNotice, setSuccessNotice] = useState()

    const onSubmit = (e) => {
        setSuccessNotice("Thank you, your form is successfully submited");
        e.target.reset();
        e.preventDefault()
    }


    return (
        <ContactSection>
            <Heading>
                <h1>Contact Us</h1>
                <Description>Please fill the form and contact us</Description>
                <Notice>{successNotice}</Notice>
            </Heading>
            <Container>
                <Form onSubmit={onSubmit}>
                    <FormRow>
                        <InfoContent>
                            <FormControl>
                                <Label>Name</Label>
                                <Input required type="text"
                                      />
                            </FormControl>
                            <FormControl>
                                <Label>Phone</Label>
                                <Input required type="tel"/>
                            </FormControl>
                            <FormControl>
                                <Label>Email</Label>
                                <Input required type="email"/>
                            </FormControl>
                            <FormControl>
                                <Label1>Company/Organization</Label1>
                                <Input type="text"/>
                            </FormControl>
                        </InfoContent>
                        <InfoContent>
                        <FormControl>
                                <Label>Subject</Label>
                                <Input required type="text"/>
                            </FormControl>          
                            <FormControlMess>
                                <Label>Message</Label>
                                <InputMess type="text"/>
                            </FormControlMess>
                            <Button full="true" type="submit">
                                Send
                            </Button>
                        </InfoContent>
                    </FormRow>
                </Form>
            </Container>
        </ContactSection>
    )
}

export default Contact
