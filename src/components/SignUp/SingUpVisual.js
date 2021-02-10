import React, {useState} from "react";
import styled from "styled-components";

const SingUpVisual = () => {

    const [entered, setEntered] = useState("")

    const onChange = (e) => {
        setEntered(e.target.value)
    }

    return (
        <Container>
            <Header>
                <h1>welcome!</h1>
            </Header>
            <Form>
                <p>ID</p>
                <Id placeholder="4 characters or more" value={entered} onChange={onChange}/>
                <p>Password</p>
                <Password placeholder="6 characters or more"/>
                <PasswordConfirm placeholder="Confirm Password"/>
                <p>Name</p>
                <Name/>
                <p>Birth</p>
                <Birth placeholder="YYYY-MM-DD"/>
                <p>Email Address</p>
                <EmailAddress/>
                <p>Phone Number</p>
                <PhoneNumber placeholder="010-0000-0000"/>
                <Join>
                    JOIN
                </Join>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  position:absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 700px;
  margin-left: -15%;
  margin-top: -350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 50px #6EADFA;
  border-radius: 20px;
`;

const Header = styled.div`
  h1 {
    text-transform: capitalize;
    color: #629DF0;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  
  p {
    margin-bottom: 5px;
    width: 40%;
    color:#8b8b8b;
  }
`;

const Id = styled.input`
  font-size: 15px;
  padding-left: 5px;
  height: 33px;
  width: 40%;
  background-color: transparent;
  border: 2.5px solid #8b8b8b;
  font-weight: 400;
  margin-bottom: 20px;
  border-radius: 2px;
  transition: .3s;

  &:hover {
    border: 2.5px solid #629DF0;
  }

  &:focus {
    outline: none;
    border: 2.5px solid #629DF0;
  }
`;

const Password = styled(Id)`

`;

const PasswordConfirm = styled(Id)`

`;

const Name = styled(Id)`

`;

const Birth = styled(Id)`

`;

const EmailAddress = styled(Id)`

`;

const PhoneNumber = styled(Id)`

`;

const Join = styled.button`
  border-radius: 5px;
  height: 40px;
  width: 100px;
  margin-top: 5px;
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

export default SingUpVisual;