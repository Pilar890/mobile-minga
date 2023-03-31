import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home'
// import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";

const Tab = createBottomTabNavigator()

function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}  />
            {/* <Tab.Screen name='register'  />  */}
            <Tab.Screen name='Mangas'  component={Mangas}  />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation