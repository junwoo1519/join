import React from "react";
import styled from "styled-components";

import SingUpVisual from "../../components/SignUp/SingUpVisual";

const SignUp = () => {

    return (
        <Container>
            <SingUpVisual/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignUp;