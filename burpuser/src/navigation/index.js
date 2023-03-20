import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import Dishdetailsscreen from '../screens/Dishdetailsscreen';
import Header from '../components/Header';
import Dishdetails from '../components/Dishdetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name=' ' component={Homescreen} options={{headerLeft:((Header))}}/>
            <Stack.Screen name='Dishdetails' component={Dishdetails} />
        </Stack.Navigator>
    )
}

export default RootNavigator