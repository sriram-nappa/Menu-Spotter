var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage,
  Image,
  Component
} = React;
var styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
});
export default class UserProfile extends Component {
    static propTypes = {}
    static defaultProps = {}
    constructor() {
        super();
        this.state = {
            isVegan: false
        }
    }
    render() {
        return (
            <View>
                 <Text style = {styles.description}>
                    User Profile
                 </Text>
            </View>
        )
    }
}