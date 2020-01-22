import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import {setLogout} from '../redux/actions/loginActions';
class HomeScreen extends PureComponent {
  render() {
    const {logout} = this.props;

    return (
      <View>
        <Text>Is Home Page</Text>
        <Button title={'Logout'} onPress={logout} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(setLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
