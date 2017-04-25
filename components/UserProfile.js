var React = require('react-native');
var {StyleSheet, View, AsyncStorage, Component, Text} = React;
var {Switch} = require('react-native');

var styles = StyleSheet.create({
  description: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  textOptions: {
    padding: 20,
    fontSize: 14,
    textAlign: 'right',
    color: '#656565'
  },
  options: {
    padding: 20,
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row'
  }
});

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVegan: false,
            isVegetarian: false,
            isLactoseIntolerant: false,
            hasNutAllergy: false,
            hasGlutenAllergy: false
        }
    }
    
    checkVegan() {
        this.setState({isVegan: !this.state.isVegan});
    }
    checkVegetarian() {
        this.setState({isVegetarian: !this.state.isVegetarian});
    }
    checkLactoseIntolerance() {
        this.setState({isLactoseIntolerant: !this.state.isLactoseIntolerant});
    }
    checkNutAllergy() {
        this.setState({hasNutAllergy: !this.state.hasNutAllergy});
    }
    checkGlutenAllergy() {
        this.setState({hasGlutenAllergy: !this.state.hasGlutenAllergy});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Personalize User Preferences
                </Text>
                <View accessible = {true} style={styles.options}>
                    <Switch
                        value={this.state.isVegan}
                        onValueChange = {this.checkVegan.bind(this)}/>
                    <Text style={styles.textOptions}>{this.state.isVegan ? 'Vegan' : 'Not Vegan'}</Text>
                </View>
                <View accessible = {true} style={styles.options}>
                    <Switch
                        value={this.state.isVegetarian}
                        onValueChange = {this.checkVegetarian.bind(this)}/>
                    <Text style={styles.textOptions}>{this.state.isVegetarian ? 'Vegetarian' : 'Not Vegetarian'}</Text>
                </View>
                <View accessible = {true} style={styles.options}>
                    <Switch
                        value={this.state.isLactoseIntolerant}
                        onValueChange = {this.checkLactoseIntolerance.bind(this)}/>
                    <Text style={styles.textOptions}>{this.state.isLactoseIntolerant ? 'Lactose Intolerant' : 'Not Lactose Intolerant'}</Text>
                </View>
                <View accessible = {true} style={styles.options}>
                    <Switch
                        value={this.state.hasNutAllergy}
                        onValueChange = {this.checkNutAllergy.bind(this)}/>
                    <Text style={styles.textOptions}>{this.state.hasNutAllergy ? 'Nut Allergy' : 'No Nut Allergies'}</Text>
                </View>
                <View accessible = {true} style={styles.options}>
                    <Switch
                        value={this.state.hasGlutenAllergy}
                        onValueChange = {this.checkGlutenAllergy.bind(this)}/>
                    <Text style={styles.textOptions}>{this.state.hasGlutenAllergy ? 'Gluten Allergy' : 'No Gluten Allergy'}</Text>
                </View>
            </View>
        );
    }
}

module.exports = UserProfile;
