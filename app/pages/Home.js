import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { ButtonWrap } from '../components/Login/styles';

const Home = props => (
  <Login>
    <ButtonWrap type="button" name="submit" onClick={() => props.changePage()}>
      Login
    </ButtonWrap>
  </Login>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/logged'),
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Home);
