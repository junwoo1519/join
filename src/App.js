import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Switch, Route} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import SingUp from "./pages/SignUp/SingUp";
import PasswordFind from "./pages/PasswordFind/PasswordFind";

const App = () => {

    return (
        <Container className={"App"}>
            <GlobalStyle/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/signup"} component={SingUp}/>
                <Route path={"/passwordFind"} component={PasswordFind}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export default App;