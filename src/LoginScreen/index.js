import React, {PureComponent} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';

import {setLogin} from '../redux/actions/loginActions';
import {callRequest} from '../redux/actions/generalActions';
class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: {},
    };
  }

  render() {
    const {login, callService, loginStatus, requestStatus} = this.props;
    return (
      <View>
        <Text>Please enter your username and password : </Text>
        <TextInput
          placeholder="Username"
          onChangeText={e =>
            this.setState({params: {...this.state.params, user: e}})
          }></TextInput>
        <TextInput
          editable={!requestStatus}
          placeholder="Password"
          secureTextEntry
          onChangeText={e =>
            this.setState({params: {...this.state.params, password: e}})
          }></TextInput>
        <Button
          title={'Login'}
          //   onPress={login}
          onPress={() => {
            callService('POST', this.state.params, '://URL/');
          }}
          style={{width: 150}}
          disabled={requestStatus}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    requestStatus: state.requestState.requestStatus,
    loginStatus: state.loginState.loginStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(setLogin()),
    callService: (method, params, url) =>
      dispatch(callRequest(method, params, url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
