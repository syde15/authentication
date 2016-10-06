var React = require('react-native');

var {
  StyleSheet,
  Navigator
} = React;


var Firebase = require('firebase');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');


var ROUTES = {signin: Signin, signup: Signup};

module.exports = React.createClass({
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>;
  },
  render: function(){
    return(
      <Navigator style={styles.container} intialRoute={{name: 'signin'}} renderScene={this.renderScene} configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
