import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LoginVisual = () => {

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
                        <Id type="text"
                            placeholder="Enter ID"/>
                        <Password type="password"
                                  placeholder="Enter Password"/>
                        <Link to={"/login/passwordFinder"}>Forget password?</Link>
                    </User>
                    <LoginBtn>
                        login
                    </LoginBtn>
                </Form>
                <SignUp to={"/login/signUp"}>
                    sign up
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
  width: 70%;
  margin-left: -35%;
  margin-top: -275px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50px #6EADFA;
  border-radius: 20px;
`;

const SignUp = styled(Link)`

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
  height: 120px;
`;

const Id = styled.input`
  padding-left: 5px;
  flex: 1;
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

const Password = styled(Id)`
`;

const Form = styled.div`

`;

const LoginBtn = styled.button`
  text-transform: uppercase;
`;

export default LoginVisual;