import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Media from '../../utils/StyleUtils';
import Container from '../../utils/Container';
import {
  FirstFormWrap,
  Titulo,
  InputContent,
  StepText,
  Form,
  ButtonWrap,
} from './styles';

const Seccion = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #fafafa;
  height: 100vh;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Seccion>
        <Container banner className="container">
          <FirstFormWrap>
            <Titulo>Levon Login</Titulo>
            <InputContent
              password
              type="text"
              name="user"
              placeholder="User"
              value={this.state.user}
              onChange={this.handleInputChange}
              required
            />
            <InputContent
              password
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            {this.props.children}
          </FirstFormWrap>
        </Container>
      </Seccion>
    );
  }
}

export default Login;
