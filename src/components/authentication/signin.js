var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

var Firebase = require('firebase');
var ref = new Firebase("https://boiling-fire-6815.firebaseio.com/");

var Button = require('../common/button')

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} value={this.state.username} onChangeText={(text) => this.setState({username: text})}/>
        <Text style={styles.label}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.input} value={this.state.password} onChangeText={(text) => this.setState({password: text})}/>
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
        <Button text={'I need an account'} onPress={this.onSignupPress} />
      </View>
    );
  },
  onPress: function(){
    ref.authWithPassword({
      email    : this.state.username,
      password : this.state.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  },
  onSignupPress: function (){
    this.props.navigator.push({name: 'signup'});
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
