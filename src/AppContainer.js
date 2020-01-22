import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import Login from './LoginScreen';

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {isLogin, lastLogin} = this.props;

    return (
      <View>
        <Text>{isLogin.toString()}</Text>
        <Text>{lastLogin ? lastLogin.toString() : 'null'}</Text>
        {isLogin ? <HomeScreen /> : <Login />}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.loginState.loginStatus,
    lastLogin: state.loginState.lastLogin,
  };
}

export default connect(mapStateToProps)(AppContainer);
