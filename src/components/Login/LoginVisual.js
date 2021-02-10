import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaEyeSlash} from "react-icons/fa";

const LoginVisual = () => {

    const [input, setInput] = useState("password")

    const passwordHandler = () => {
        if (input === "password")
        setInput("text")
        else {
            setInput("password")
        }
    }

    return (
        <Container>
            <ColLine1>
                <h2>Welcome to Junu's Portfolio!</h2>
                <p>Thank you for using Junu's bulletin board.</p>
            </ColLine1>
            <ColLine2>
                <Header>
                    <h2>signin</h2>
                </Header>
                <Form>
                    <User>
                        <Id type="text" placeholder="Enter ID"/>
                        <Password type={input} placeholder="Enter Password"/>
                        <ShowAndHide onClick={passwordHandler}>
                            <FaEyeSlash/>
                        </ShowAndHide>
                        <PasswordFind to={"/passwordFind"}>Forgot password?</PasswordFind>
                    </User>
                    <LoginBtn>
                        login
                    </LoginBtn>
                </Form>
                <SignUp to={"/signup"}>
                    Sign up
                </SignUp>
            </ColLine2>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 550px;
  width: 60%;
  margin-left: -30%;
  margin-top: -275px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50px #6EADFA;
  border-radius: 20px;
`;

const ShowAndHide = styled.div`
  position: absolute;
  right: 5px;
  bottom: 15px;
  font-size: 20px;
  cursor:pointer;
`;

const ColLine1 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #629DF0;
  border-radius: 20px 0 0 20px;
  color: #fff;
  line-height: 1.5;
`;

const ColLine2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
`;

const Header = styled.div`
  h2 {
    position: relative;
    text-transform: capitalize;
    color: #8b8b8b;
    font-size: 27px;
    margin-bottom: 50px;

    &::before {
      position: absolute;
      bottom: -13px;
      left: 20px;
      content: "";
      height: 4px;
      width: 40px;
      background-color: #629DF0;
      border-radius: 1px;
    }
  }

`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: relative;
`;

const PasswordFind = styled(Link)`
  position: absolute;
  right: 0;
  bottom: -10px;
  font-size: 13px;
  color: #8b8b8b;
  transition: .3s;

  &:hover {
    color: #629DF0;
  }
`;

const Id = styled.input`
  padding-left: 5px;
  height: 100%;
  width: 280px;
  background-color: transparent;
  border: none;
  border-bottom: 2.5px solid #8b8b8b;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  border-radius: 1px;
  transition: .3s;

  &:hover {
    border-bottom: 2.5px solid #629DF0;
  }

  &:focus {
    outline: none;
    border-bottom: 2.5px solid #629DF0;
  }
`;

const Password = styled.input`
  padding-left: 5px;
  height: 100%;
  width: 280px;
  background-color: transparent;
  border: none;
  border-bottom: 2.5px solid #8b8b8b;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  border-radius: 1px;
  transition: .3s;

  &:hover {
    border-bottom: 2.5px solid #629DF0;
  }

  &:focus {
    outline: none;
    border-bottom: 2.5px solid #629DF0;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBtn = styled.button`
  border-radius: 5px;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  background-color: #fff;
  color: #629DF0;
  border: 2px solid #629DF0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  transition: .3s;

  &:hover {
    background-color: #629DF0;
    color: #fff;
  }
`;

const SignUp = styled(Link)`
  margin-top: 8px;
  font-size: 14px;
  color: #8b8b8b;
  transition: .3s;

  &:hover {
    color: #629DF0;
  }
`;

export default LoginVisual;