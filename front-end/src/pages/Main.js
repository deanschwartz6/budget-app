import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export default function Main({ user, setUser }){
    const [activeTab, setActiveTab] = useState("SignIn");
    const tabClickHandler = (event) => {
        setActiveTab(event.target.name);
    };
    const signInHandler = () => {
        console.log("Sign in clicked");
    };
    const createUserHandler = () => {
        console.log("Create user clicked");
    };

    if(activeTab === "SignIn"){
        return(
            <ContentWrapper>
                <CardWrapper>
                    <TabsWrapper>
                        <TabButton name="SignIn" active={`${activeTab}`} onClick={tabClickHandler}>Sign In</TabButton>
                        <TabButton name="CreateUser" active={`${activeTab}`} onClick={tabClickHandler}>Create User</TabButton>
                    </TabsWrapper>
                    <SignInForm>
                        <FormInput type='text' placeholder='Username' ></FormInput>
                        <FormInput type='password' placeholder='Password' ></FormInput>
                    </SignInForm>
                    <SubmitButton onClick={signInHandler} >SIGN IN</SubmitButton>
                </CardWrapper>
            </ContentWrapper>
        );
    } else {
        return(
            <ContentWrapper>
                <CardWrapper>
                    <TabsWrapper>
                        <TabButton name="SignIn" active={`${activeTab}`} onClick={tabClickHandler}>Sign In</TabButton>
                        <TabButton name="CreateUser" active={`${activeTab}`} onClick={tabClickHandler}>Create User</TabButton>
                    </TabsWrapper>
                    <SignInForm>
                        <FormInput type='text' placeholder='Username' ></FormInput>
                        <FormInput type='password' placeholder='Password' ></FormInput>
                    </SignInForm>
                    <SubmitButton onClick={createUserHandler}>CREATE USER</SubmitButton>
                </CardWrapper>
            </ContentWrapper>
        );
    }
}

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #282F44;
    margin: -.5em;
    height: 100vh;
`;

const CardWrapper = styled.div`
    height: 28em;
    width: 27em;
    margin-top: 10%;
    padding: 2.5%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    flex-direction: column;
    background-color: #66708c;
    gap: 22%;
`;

const TabsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const TabButton = styled.button`
    font-size: 1.3rem;
    color: white;
    cursor: pointer;
    background-color: #66708c;
    padding-bottom: .3em;
    border: none;
    ${({ name, active }) => {
        if(name === active){
            return css`
                border-bottom: solid .25rem #191D32;
                &:hover {
                    font-size: 1.4rem;
                    border-bottom: solid .35rem #191D32;
                }
            `;
        } else {
            return css`
                border-bottom: solid .25rem #e1e1e1;
                &:hover {
                    font-size: 1.4rem;
                    border-bottom: solid .35rem #e1e1e1;
                }
            `;
        }
    }}
`;

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 50%;
`;

const FormInput = styled.input`
    padding: 1em;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SubmitButton = styled.button`
    align-self: center;
    color: white;
    font-size: 1rem;
    height: 10%;
    width: 45%;
    border: none;
    background-color: #191D32;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
        background-color: #303343;
    }
`;