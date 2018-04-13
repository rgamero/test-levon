import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/modules/counter';
import styled, { css } from 'styled-components';
import List from '../components/List';
import Container from '../utils/Container';
import { Titulo, Message, ButtonWrap } from '../components/Login/styles';

const Seccion = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
`;

const SideWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row nowrap;
  position: relative;
  width: 100%;
`;

const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  position: relative;
  width: 100%;
`;

const Logged = props => (
  <Seccion>
    <Container banner className="container">
      <Titulo>Home</Titulo>
      <Message>Count: {props.count}</Message>
      <SideWrap>
        <Side>
          <ButtonWrap onClick={props.increment}>Add todo</ButtonWrap>
          <ButtonWrap onClick={props.decrement}>Remove todo</ButtonWrap>
          <ButtonWrap onClick={() => props.changePage()}>
            Go to Login
          </ButtonWrap>
        </Side>
        <Side>
          <List items={props.items} />
        </Side>
      </SideWrap>
    </Container>
  </Seccion>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  items: state.counter.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      changePage: () => push('/'),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Logged);
