import React, { Component } from "react";
import styled from 'styled-components';

// import '../styles/App.css';

const Title = styled.div `
    color: blue;
`;

class App extends Component {
    render() {
        return (
            <Title>
                <h1>сука!</h1>
            </Title>
        );
    }
}

export default App;